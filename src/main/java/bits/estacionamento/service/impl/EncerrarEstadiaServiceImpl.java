package bits.estacionamento.service.impl;

import java.math.BigDecimal;
import java.time.Duration;
import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import bits.estacionamento.entity.Estadia;
import bits.estacionamento.entity.TipoPlano;
import bits.estacionamento.exception.EstadiaJaFinalizadaException;
import bits.estacionamento.exception.EstadiaNaoEncontradaException;
import bits.estacionamento.repository.EstadiasRepository;
import bits.estacionamento.service.EncerrarEstadiaService;
import bits.estacionamento.utils.DateUtils;

@Service
public class EncerrarEstadiaServiceImpl implements EncerrarEstadiaService {
    private final BigDecimal VALOR_HORA_AVULSO = BigDecimal.valueOf(10.5);

    private final BigDecimal VALOR_MENSAL = BigDecimal.valueOf(266.50);

    @Autowired
    private EstadiasRepository estadiasRepository;

    @Transactional
    public Estadia perform(Long id) {
        Estadia estadia = estadiasRepository.findById(id).orElseThrow(() -> new EstadiaNaoEncontradaException());

        if (estadia.getSaida() != null) {
            throw new EstadiaJaFinalizadaException();
        }
        estadia.setSaida(DateUtils.now());
        if (estadia.getPlano() == TipoPlano.MENSAL) {
            estadia.setValor(calculaValorMensal(estadia.getEntrada(), estadia.getSaida()));
        } else {
            estadia.setValor(calculaValorAvulso(estadia.getEntrada(), estadia.getSaida()));
        }

        estadiasRepository.save(estadia);

        return estadia;
    }

    private BigDecimal calculaValorAvulso(LocalDateTime entrada, LocalDateTime saida) {
        Duration duration = Duration.between(entrada, saida);
        long diff = duration.plusHours(1).minusNanos(1).toHours();

        return VALOR_HORA_AVULSO.multiply(BigDecimal.valueOf(diff));
    }

    private BigDecimal calculaValorMensal(LocalDateTime entrada, LocalDateTime saida) {
        return VALOR_MENSAL;
    }
}

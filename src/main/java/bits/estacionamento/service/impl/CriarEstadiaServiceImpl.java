package bits.estacionamento.service.impl;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import bits.estacionamento.entity.Cliente;
import bits.estacionamento.entity.Estadia;
import bits.estacionamento.entity.EstadiaStatus;
import bits.estacionamento.entity.TipoPlano;
import bits.estacionamento.entity.Vaga;
import bits.estacionamento.exception.ClienteNaoEncontradoException;
import bits.estacionamento.exception.VagaIndisponivelException;
import bits.estacionamento.exception.VagaNaoEncontradaException;
import bits.estacionamento.repository.ClientesRepository;
import bits.estacionamento.repository.EstadiasRepository;
import bits.estacionamento.repository.VagasRepository;
import bits.estacionamento.service.CriarEstadiaService;
import bits.estacionamento.utils.DateUtils;

@Service
public class CriarEstadiaServiceImpl implements CriarEstadiaService {
    @Autowired
    VagasRepository vagasRepository;

    @Autowired
    ClientesRepository clientesRepository;

    @Autowired
    EstadiasRepository estadiasRepository;

    @Override
    @Transactional
    public Estadia perform(Long vagaId, Long clientId, TipoPlano plano) {
        final Vaga vaga = vagasRepository.findById(vagaId).orElseThrow(() -> new VagaNaoEncontradaException());
        if (vaga.getEstadia() != null) {
            throw new VagaIndisponivelException();
        }

        final Cliente cliente = clientesRepository.findById(clientId).orElseThrow(() -> new ClienteNaoEncontradoException());

        final LocalDateTime now = DateUtils.now();
        final Estadia estadia = Estadia.newInstance(now, cliente, vaga, plano, EstadiaStatus.ATIVO);
        estadia.iniciaEstadia();
        return estadiasRepository.save(estadia);
    }
}

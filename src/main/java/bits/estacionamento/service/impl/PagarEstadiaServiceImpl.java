package bits.estacionamento.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import bits.estacionamento.entity.Estadia;
import bits.estacionamento.entity.EstadiaStatus;
import bits.estacionamento.entity.Pagamento;
import bits.estacionamento.exception.EstadiaJaFoiPagaException;
import bits.estacionamento.exception.EstadiaNaoEncontradaException;
import bits.estacionamento.exception.EstadiaNaoFinalizadaException;
import bits.estacionamento.repository.EstadiasRepository;
import bits.estacionamento.service.PagarEstadiaService;

@Service
public class PagarEstadiaServiceImpl implements PagarEstadiaService {
    @Autowired
    private EstadiasRepository estadiasRepository;

    @Override
    @Transactional
    public Pagamento perform(Long id) {
        Estadia estadia = estadiasRepository.findById(id).orElseThrow(() -> new EstadiaNaoEncontradaException());

        if (estadia.getSaida() == null) {
            throw new EstadiaNaoFinalizadaException();
        }

        if (estadia.getPagamento() != null) {
            throw new EstadiaJaFoiPagaException();
        }

        Pagamento pagamento = new Pagamento();
        estadia.setPagamento(pagamento);
        estadia.setStatus(EstadiaStatus.INATIVO);
        estadiasRepository.save(estadia);

        return pagamento;
    }
}

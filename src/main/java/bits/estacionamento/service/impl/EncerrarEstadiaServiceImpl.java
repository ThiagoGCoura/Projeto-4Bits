package bits.estacionamento.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import bits.estacionamento.entity.Estadia;
import bits.estacionamento.entity.EstadiaStatus;
import bits.estacionamento.exception.EstadiaJaFinalizadaException;
import bits.estacionamento.exception.EstadiaNaoEncontradaException;
import bits.estacionamento.repository.EstadiasRepository;
import bits.estacionamento.service.EncerrarEstadiaService;
import bits.estacionamento.utils.DateUtils;

@Service
public class EncerrarEstadiaServiceImpl implements EncerrarEstadiaService {
    @Autowired
    private EstadiasRepository estadiasRepository;

    @Transactional
    public Estadia perform(Long id) {
        Estadia estadia = estadiasRepository.findById(id).orElseThrow(() -> new EstadiaNaoEncontradaException());
        estadia.encerraEstadia(DateUtils.now());
        estadiasRepository.save(estadia);
        return estadia;
    }
}

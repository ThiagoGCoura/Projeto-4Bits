package bits.estacionamento.service;

import bits.estacionamento.entity.Estadia;

public interface EncerrarEstadiaService {
    Estadia perform(Long id);
}

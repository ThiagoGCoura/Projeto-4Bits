package bits.estacionamento.service;

import bits.estacionamento.entity.Estadia;
import bits.estacionamento.entity.TipoPlano;

public interface CriarEstadiaService {
    Estadia perform(Long vagaId, Long clientId, TipoPlano plano);
}

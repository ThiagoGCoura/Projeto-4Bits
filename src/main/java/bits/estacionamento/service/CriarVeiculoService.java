package bits.estacionamento.service;

import bits.estacionamento.entity.TipoVeiculo;
import bits.estacionamento.entity.Veiculo;

public interface CriarVeiculoService {
    Veiculo perform(String marca, String modelo, String cor, String placa, TipoVeiculo tipo);
}

package bits.estacionamento.service;

import bits.estacionamento.entity.Cliente;

public interface CriarClientService {
    Cliente perform(String nome, String cpf, String telefone, Long veiculoId);
}

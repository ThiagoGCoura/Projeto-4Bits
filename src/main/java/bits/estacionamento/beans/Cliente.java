package bits.estacionamento.beans;

import lombok.Data;

@Data
public class Cliente {
    String nome;
    String cpf;
    String telefone;
    Veiculo veiculo;
}

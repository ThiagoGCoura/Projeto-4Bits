package bits.estacionamento.beans;

import lombok.Data;

@Data
public class Veiculo {
    String marca;
    String modelo;
    String cor;
    String placa;
    TipoVeiculo tipo;
}

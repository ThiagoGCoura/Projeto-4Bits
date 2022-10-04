package bits.estacionamento.beans;

import lombok.Data;

import java.time.LocalDateTime;
@Data
public class Estadia {
    LocalDateTime entrada;
    LocalDateTime saida;
    Cliente cliente;
}

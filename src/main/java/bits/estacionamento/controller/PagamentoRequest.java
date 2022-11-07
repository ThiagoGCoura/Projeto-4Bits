package bits.estacionamento.controller;

import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
public class PagamentoRequest {
    @NotNull
    private Long idEstadia;
}

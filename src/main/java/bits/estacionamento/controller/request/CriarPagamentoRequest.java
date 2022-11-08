package bits.estacionamento.controller.request;

import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
public class CriarPagamentoRequest {
    @NotNull
    private Long idEstadia;
}

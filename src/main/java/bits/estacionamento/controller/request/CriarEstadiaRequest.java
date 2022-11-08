package bits.estacionamento.controller.request;

import javax.validation.constraints.NotNull;

import lombok.Data;

import bits.estacionamento.entity.TipoPlano;

@Data
public class CriarEstadiaRequest {
    @NotNull
    private Long clienteId;

    @NotNull
    private Long vagaId;

    @NotNull
    private TipoPlano plano;
}

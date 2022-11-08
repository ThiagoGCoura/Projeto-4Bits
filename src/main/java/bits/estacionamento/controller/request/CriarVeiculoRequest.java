package bits.estacionamento.controller.request;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import lombok.Data;

import bits.estacionamento.entity.TipoVeiculo;

@Data
public class CriarVeiculoRequest {
    @NotNull
    String marca;

    @NotNull
    String modelo;

    @NotNull
    String cor;

    @NotNull
    @Pattern(regexp = "[a-zA-Z]{3}[0-9][a-zA-Z][0-9]{2}|[a-zA-Z]{3}[0-9]{4}",
        message = "O formato da placa deve ser: AAA9999 ou AAA9A99 em que A repressenta uma letra e 9 um dígito")
    String placa;

    @NotNull
    TipoVeiculo tipo;
}

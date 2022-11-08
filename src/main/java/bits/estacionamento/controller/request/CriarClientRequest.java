package bits.estacionamento.controller.request;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Data;

import org.hibernate.validator.constraints.br.CPF;

@Data
public class CriarClientRequest {
    @NotNull
    private String nome;

    @CPF
    private String cpf;

    @Size(min = 10, max = 11, message = "Numero de telefone com DDD (minimo 10 e maximo 11 digitos)")
    private String telefone;

    @NotNull
    private Long veiculoId;
}

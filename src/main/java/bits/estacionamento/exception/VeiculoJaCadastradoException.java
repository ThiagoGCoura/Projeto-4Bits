package bits.estacionamento.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.CONFLICT, reason = "Veiculo já cadastrado")
public class VeiculoJaCadastradoException extends RuntimeException {
}

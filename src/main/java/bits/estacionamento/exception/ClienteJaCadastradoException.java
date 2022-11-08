package bits.estacionamento.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.CONFLICT, reason = "Cliente ja existe com os dados informados")
public class ClienteJaCadastradoException extends RuntimeException {
}

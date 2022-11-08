package bits.estacionamento.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.CONFLICT, reason = "A estadia ja foi finalizada")
public class EstadiaJaFinalizadaException extends RuntimeException {
}

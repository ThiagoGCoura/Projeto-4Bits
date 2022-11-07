package bits.estacionamento.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.CONFLICT, reason = "O pagamento da estadia ja foi realizado")
public class EstadiaJaFoiPagaException extends RuntimeException {
}

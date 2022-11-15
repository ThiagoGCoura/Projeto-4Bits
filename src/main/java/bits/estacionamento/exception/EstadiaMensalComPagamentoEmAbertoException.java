package bits.estacionamento.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.UNPROCESSABLE_ENTITY,
    reason = "Não é possível encerrar a estadia, pois há pagamentos em aberto")
public class EstadiaMensalComPagamentoEmAbertoException extends RuntimeException {
}

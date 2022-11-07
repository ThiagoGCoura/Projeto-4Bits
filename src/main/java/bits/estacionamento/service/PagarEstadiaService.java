package bits.estacionamento.service;

import bits.estacionamento.entity.Pagamento;

public interface PagarEstadiaService {
    Pagamento perform(Long estadiaId);
}

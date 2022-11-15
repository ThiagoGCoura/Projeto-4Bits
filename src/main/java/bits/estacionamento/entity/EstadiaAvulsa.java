package bits.estacionamento.entity;

import java.math.BigDecimal;
import java.time.Duration;
import java.time.LocalDateTime;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

import bits.estacionamento.exception.EstadiaJaFinalizadaException;
import bits.estacionamento.exception.EstadiaNaoFinalizadaException;

@DiscriminatorValue("AVULSO")
@Entity
public class EstadiaAvulsa extends Estadia {
    private static final BigDecimal VALOR_HORA_AVULSO = BigDecimal.valueOf(10.5);

    private EstadiaAvulsa() {
    }

    protected EstadiaAvulsa(LocalDateTime entrada, Cliente cliente, Vaga vaga, EstadiaStatus status) {
        super(entrada, cliente, vaga, status);
        this.setPlano(TipoPlano.AVULSO);
    }

    @Override
    public void iniciaEstadia() {
    }

    @Override
    public void encerraEstadia(LocalDateTime saida) {
        super.encerraEstadia(saida);

        if (this.getSaida() != null) {
            throw new EstadiaJaFinalizadaException();
        }

        Duration duration = Duration.between(getEntrada(), saida);
        long diff = duration.plusHours(1).minusNanos(1).toHours();
        this.setValor(VALOR_HORA_AVULSO.multiply(BigDecimal.valueOf(diff)));
        this.setSaida(saida);
    }

    @Override
    public void registraPagamento(Pagamento pagamento) {
        if (this.getSaida() == null) {
            throw new EstadiaNaoFinalizadaException();
        }

        super.registraPagamento(pagamento);
        this.setStatus(EstadiaStatus.INATIVO);
    }
}

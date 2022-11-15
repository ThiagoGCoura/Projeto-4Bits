package bits.estacionamento.entity;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

import lombok.Getter;

import bits.estacionamento.exception.EstadiaMensalComPagamentoEmAbertoException;

@DiscriminatorValue("MENSAL")
@Entity
public class EstadiaMensal extends Estadia {
    private static final BigDecimal VALOR_MENSAL = BigDecimal.valueOf(266.50);

    @Getter
    private LocalDateTime expiracao;

    private EstadiaMensal() {
    }

    public EstadiaMensal(LocalDateTime entrada, Cliente cliente, Vaga vaga, EstadiaStatus status) {
        super(entrada, cliente, vaga, status);
        this.setPlano(TipoPlano.MENSAL);
    }

    @Override
    public void iniciaEstadia() {
        this.expiracao = this.getEntrada().plusMonths(1);
        this.setValor(VALOR_MENSAL);
    }

    @Override
    public void encerraEstadia(LocalDateTime saida) {
        super.encerraEstadia(saida);

        if (this.getPagamento() == null) {
            throw new EstadiaMensalComPagamentoEmAbertoException();
        }
        this.setSaida(saida);
        this.setStatus(EstadiaStatus.INATIVO);
    }
}

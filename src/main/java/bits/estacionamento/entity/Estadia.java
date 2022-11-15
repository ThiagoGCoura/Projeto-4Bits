package bits.estacionamento.entity;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import lombok.Data;
import lombok.NoArgsConstructor;

import bits.estacionamento.exception.EstadiaJaFinalizadaException;
import bits.estacionamento.exception.EstadiaJaFoiPagaException;
import com.fasterxml.jackson.annotation.JsonBackReference;

@Data
@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "tipo_plano")
@NoArgsConstructor
public abstract class Estadia {

    public static Estadia newInstance(LocalDateTime entrada, Cliente cliente, Vaga vaga, TipoPlano plano, EstadiaStatus status) {
        if (TipoPlano.AVULSO == plano) {
            return new EstadiaAvulsa(entrada, cliente, vaga, status);
        } else if (TipoPlano.MENSAL == plano) {
            return new EstadiaMensal(entrada, cliente, vaga, status);
        }

        throw new IllegalArgumentException("Parâmetro plano não aceito");
    }

    protected Estadia(LocalDateTime entrada, Cliente cliente, Vaga vaga, EstadiaStatus status) {
        this.entrada = entrada;
        this.cliente = cliente;
        this.vaga = vaga;
        this.status = status;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_estadia")
    private Long id;

    private LocalDateTime entrada;

    private LocalDateTime saida;

    @OneToOne
    @JoinColumn(name = "id_cliente")
    private Cliente cliente;

    @ManyToOne
    @JoinColumn(name = "id_vaga")
    @JsonBackReference
    private Vaga vaga;

    @Enumerated(EnumType.STRING)
    @Column(name = "tipo_plano", insertable = false, updatable = false)
    private TipoPlano plano;

    private BigDecimal valor;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_pagamento")
    private Pagamento pagamento;

    @Enumerated(EnumType.STRING)
    private EstadiaStatus status;

    public abstract void iniciaEstadia();

    public void encerraEstadia(LocalDateTime saida) {
        if (this.getStatus() == EstadiaStatus.INATIVO) {
            throw new EstadiaJaFinalizadaException();
        }
    }

    public void registraPagamento(Pagamento pagamento) {
        if (this.getPagamento() != null) {
            throw new EstadiaJaFoiPagaException();
        }

        this.pagamento = pagamento;
    }
}

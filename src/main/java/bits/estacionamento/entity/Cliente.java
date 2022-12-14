package bits.estacionamento.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import lombok.Data;

@Data
@Entity
public class Cliente {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id_cliente")
    private Long id;

    private String nome;
    private String cpf;
    private String telefone;

    @OneToOne
    @JoinColumn(name = "id_veiculo")
    private Veiculo veiculo;
}

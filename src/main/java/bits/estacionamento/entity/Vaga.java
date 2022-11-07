package bits.estacionamento.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.Data;

import org.hibernate.annotations.JoinFormula;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Data
@Entity
public class Vaga {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_vaga")
    private Long id;

    String numero;

    @ManyToOne
    @JoinFormula(
        "(SELECT e.id_estadia " +
            "FROM estadia e " +
            "WHERE e.id_vaga = id_vaga " +
            "AND e.status = 'ATIVO' " +
            "LIMIT 1)"
    )
    @JsonManagedReference
    private Estadia estadia;
}

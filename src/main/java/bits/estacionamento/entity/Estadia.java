package bits.estacionamento.entity;

import lombok.Data;

import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Data
@Entity
public class Estadia {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id_estadia")
    private Long id;
    private LocalDateTime entrada;
    private LocalDateTime saida;

    @OneToOne
    @JoinColumn(name = "id_cliente")
    private Cliente cliente;
}

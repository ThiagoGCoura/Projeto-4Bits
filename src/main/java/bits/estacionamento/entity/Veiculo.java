package bits.estacionamento.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Veiculo {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id_veiculo")
    private Long id;

    String marca;
    String modelo;
    String cor;
    String placa;
    @Enumerated(EnumType.STRING)
    TipoVeiculo tipo;
}

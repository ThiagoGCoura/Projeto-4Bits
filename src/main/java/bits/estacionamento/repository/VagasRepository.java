package bits.estacionamento.repository;

import org.springframework.data.repository.CrudRepository;

import bits.estacionamento.entity.Vaga;

public interface VagasRepository extends CrudRepository<Vaga, Long> {
}

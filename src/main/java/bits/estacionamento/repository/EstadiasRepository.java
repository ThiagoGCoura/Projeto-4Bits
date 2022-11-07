package bits.estacionamento.repository;

import org.springframework.data.repository.CrudRepository;

import bits.estacionamento.entity.Estadia;

public interface EstadiasRepository extends CrudRepository<Estadia, Long> {
}

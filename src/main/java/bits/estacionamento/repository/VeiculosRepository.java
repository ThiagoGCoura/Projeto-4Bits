package bits.estacionamento.repository;

import java.util.Set;

import org.springframework.data.repository.CrudRepository;

import bits.estacionamento.entity.Veiculo;

public interface VeiculosRepository extends CrudRepository<Veiculo, Long> {
    Set<Veiculo> findByPlacaStartsWith(String placa);

    Set<Veiculo> findByPlaca(String placa);
}

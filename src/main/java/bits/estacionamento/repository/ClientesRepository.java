package bits.estacionamento.repository;

import java.util.Set;

import org.springframework.data.repository.CrudRepository;

import bits.estacionamento.entity.Cliente;

public interface ClientesRepository extends CrudRepository<Cliente, Long> {
    Set<Cliente> findByCpfStartsWith(String cpf);
}

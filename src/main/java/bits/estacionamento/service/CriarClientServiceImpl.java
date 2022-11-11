package bits.estacionamento.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import bits.estacionamento.entity.Cliente;
import bits.estacionamento.entity.Veiculo;
import bits.estacionamento.exception.VeiculoNaoEncontradoException;
import bits.estacionamento.repository.ClientesRepository;
import bits.estacionamento.repository.VeiculosRepository;

@Service
public class CriarClientServiceImpl implements CriarClientService {
    @Autowired
    VeiculosRepository veiculosRepository;

    @Autowired
    ClientesRepository clientesRepository;

    @Override
    @Transactional
    public Cliente perform(String nome, String cpf, String telefone, Long veiculoId) {
        Veiculo veiculo = veiculosRepository.findById(veiculoId).orElseThrow(() -> new VeiculoNaoEncontradoException());
        final Cliente cliente = new Cliente();
        cliente.setCpf(cpf);
        cliente.setNome(nome);
        cliente.setTelefone(telefone);
        cliente.setVeiculo(veiculo);

        return clientesRepository.save(cliente);
    }
}

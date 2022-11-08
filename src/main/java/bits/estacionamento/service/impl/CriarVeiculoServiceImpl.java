package bits.estacionamento.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import bits.estacionamento.entity.TipoVeiculo;
import bits.estacionamento.entity.Veiculo;
import bits.estacionamento.exception.VeiculoJaCadastradoException;
import bits.estacionamento.repository.VeiculosRepository;
import bits.estacionamento.service.CriarVeiculoService;

@Service
public class CriarVeiculoServiceImpl implements CriarVeiculoService {
    @Autowired
    private VeiculosRepository repository;

    @Override
    @Transactional
    public Veiculo perform(String marca, String modelo, String cor, String placa, TipoVeiculo tipo) {
        if (!repository.findByPlaca(placa).isEmpty()) {
            throw new VeiculoJaCadastradoException();
        }

        Veiculo veiculo = new Veiculo();
        veiculo.setMarca(marca);
        veiculo.setModelo(modelo);
        veiculo.setCor(cor);
        veiculo.setPlaca(placa);
        veiculo.setTipo(tipo);
        return repository.save(veiculo);
    }
}

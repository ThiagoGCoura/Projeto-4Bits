package bits.estacionamento.controller;

import java.util.Set;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import bits.estacionamento.controller.request.CriarVeiculoRequest;
import bits.estacionamento.entity.Veiculo;
import bits.estacionamento.repository.VeiculosRepository;
import bits.estacionamento.service.CriarVeiculoService;

@RestController
public class VeiculosController {

    @Autowired
    private VeiculosRepository repository;

    @Autowired
    private CriarVeiculoService criarVeiculoService;

    @RequestMapping(value = "/veiculos", method = RequestMethod.GET)
    public Set<Veiculo> buscarVeiculo(@RequestParam @Validated @NotNull @Size(min = 3) String placa) {
        return repository.findByPlacaStartsWith(placa);
    }

    @RequestMapping(value = "/veiculos", method = RequestMethod.POST)
    public Veiculo criarVeiculo(@Validated @RequestBody CriarVeiculoRequest criarVeiculoRequest) {
        return criarVeiculoService.perform(criarVeiculoRequest.getMarca(), criarVeiculoRequest.getModelo(), criarVeiculoRequest.getCor(), criarVeiculoRequest.getPlaca(), criarVeiculoRequest.getTipo());
    }
}

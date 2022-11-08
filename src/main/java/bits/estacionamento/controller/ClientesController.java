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

import bits.estacionamento.controller.request.CriarClientRequest;
import bits.estacionamento.entity.Cliente;
import bits.estacionamento.repository.ClientesRepository;
import bits.estacionamento.service.CriarClientService;

@RestController
public class ClientesController {

    @Autowired
    private ClientesRepository repository;

    @Autowired
    private CriarClientService criarClientService;

    @RequestMapping(value = "/clientes", method = RequestMethod.GET)
    public Set<Cliente> buscarCliente(@RequestParam @Validated @NotNull @Size(min = 3) String cpf) {
        return repository.findByCpfStartsWith(cpf);
    }

    @RequestMapping(value = "/clientes", method = RequestMethod.POST)
    public Cliente criarCliente(@Validated @RequestBody CriarClientRequest request) {
        return criarClientService.perform(request.getNome(), request.getCpf(), request.getTelefone(), request.getVeiculoId());
    }
}

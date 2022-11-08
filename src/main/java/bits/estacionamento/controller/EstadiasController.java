package bits.estacionamento.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import bits.estacionamento.controller.request.CriarEstadiaRequest;
import bits.estacionamento.entity.Estadia;
import bits.estacionamento.exception.EstadiaNaoEncontradaException;
import bits.estacionamento.repository.EstadiasRepository;
import bits.estacionamento.service.CriarEstadiaService;
import bits.estacionamento.service.EncerrarEstadiaService;

@RestController
public class EstadiasController {
    @Autowired
    private EncerrarEstadiaService encerrarEstadiaService;

    @Autowired
    private CriarEstadiaService criarEstadiaService;

    @Autowired
    private EstadiasRepository estadiasRepository;

    @RequestMapping(value = "/estadias/{id}/encerrar", method = RequestMethod.POST)
    public Estadia encerrarEstadia(@PathVariable Long id) {
        return encerrarEstadiaService.perform(id);
    }

    @RequestMapping("/estadias/{id}")
    public Estadia getEstadia(@PathVariable Long id) {
        return estadiasRepository.findById(id).orElseThrow(() -> new EstadiaNaoEncontradaException());
    }

    @RequestMapping(value = "/estadias", method = RequestMethod.POST)
    public Estadia criarEstadia(@Validated @RequestBody CriarEstadiaRequest criarEstadiaRequest) {
        return criarEstadiaService.perform(criarEstadiaRequest.getVagaId(), criarEstadiaRequest.getClienteId(), criarEstadiaRequest.getPlano());
    }
}

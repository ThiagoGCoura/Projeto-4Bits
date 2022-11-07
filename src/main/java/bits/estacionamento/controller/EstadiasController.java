package bits.estacionamento.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import bits.estacionamento.entity.Estadia;
import bits.estacionamento.repository.EstadiasRepository;
import bits.estacionamento.service.EncerrarEstadiaService;

@RestController
public class EstadiasController {
    @Autowired
    private EncerrarEstadiaService encerrarEstadiaService;

    @Autowired
    private EstadiasRepository estadiasRepository;

    @RequestMapping(value = "/estadias/{id}/encerrar", method = RequestMethod.POST)
    public Estadia encerrarEstadia(@PathVariable Long id) {
        return encerrarEstadiaService.perform(id);
    }
}

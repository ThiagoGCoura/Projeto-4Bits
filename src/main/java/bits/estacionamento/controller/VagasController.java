package bits.estacionamento.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import bits.estacionamento.entity.Vaga;
import bits.estacionamento.repository.VagasRepository;
import liquibase.repackaged.org.apache.commons.collections4.IterableUtils;

@RestController
public class VagasController {
  @Autowired
  private VagasRepository repository;

  @RequestMapping(value = "/vagas", method = RequestMethod.GET)
  public List<Vaga> list() {
    return IterableUtils.toList(repository.findAll());
  }
}

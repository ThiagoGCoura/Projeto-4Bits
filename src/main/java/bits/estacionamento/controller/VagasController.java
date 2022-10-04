package bits.estacionamento.controller;

import bits.estacionamento.beans.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.time.Month;
import java.util.ArrayList;
import java.util.List;

@RestController
public class VagasController {
    @RequestMapping("/vagas")
    public List<Vaga> list(){
        List<Vaga> vagas = new ArrayList<>();
        Veiculo veiculo = new Veiculo();
        veiculo.setCor("azul");
        veiculo.setMarca("Fiat");
        veiculo.setTipo(TipoVeiculo.CARRO);
        veiculo.setPlaca("ABC23D7");

        Cliente cliente = new Cliente();
        cliente.setCpf("12345678901");
        cliente.setNome("Laercio Pereira");
        cliente.setTelefone("11988888087");
        cliente.setVeiculo(veiculo);

        Estadia estadia = new Estadia();
        estadia.setCliente(cliente);
        estadia.setEntrada(LocalDateTime.of(2022, Month.DECEMBER, 8, 17, 19));

        Vaga vaga = new Vaga();
        vaga.setEstadia(estadia);
        vaga.setNumero("78");

        vagas.add(vaga);

        return vagas;
    }
}

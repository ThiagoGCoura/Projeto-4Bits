# Projeto-4Bits
Prática Profissional em Análise e Desenvolvimento de Sistemas
<br><br>
Dados dos alunos:
<br>
Gabriel Rodrigues
<br>
Luana Theodoro
<br>
Macsuel Dias Soares
<br>
Maisa Enide Fernandes
<br>
Thiago Gonçalves Coura

## Executando o projeto
Este projeto foi construindo utilizando o framework `spring-boot` e depende de um banco de dados MySQL 5.7 para que possa ser executado.

### Configurando o banco de dados
Para executá-lo, é preciso que haja um banco de dados MySQL para que a aplicação seja conectada e uma base de dados com o nome `estacionamento`.
Os dados de conexão com o banco de dados podem ser informados através das seguintes variáveis de ambiente:

<p>
<code>MYSQL_HOST</code><br>
O endereço do host em que o banco de dados
</p>

<p>
<code>MYSQL_USERNAME</code><br>
O nome do usuario com acesso de leitura e escrita ao banco
</p>

<p>
<code>MYSQL_PASSWORD</code><br>
A senha de acessso do usuário
</p>


Em desenvolvimento, você pode executar uma base de dados instalando a versão 5.7 do MySQL server.
Neste repositório, disponibilizamos ainda um arquivo `docker compose` que nos permite executar um instância de MySQL sem que seja necessário instalá-lo em nosso computador.
Para iniciá-lo, é preciso ter `Docker` e `Docker Compose` instalado em seu computador e emitir o seguinte comando a partir da raiz do projeto:

<code>
$ docker compose up -d
</code>

Este comando iniciará um MySQL 5.7 na porta 3306 com usuário `root` e senha `secret` (nesse caso, não é necesssário definir valores para as variáveis de ambiente)

### Iniciando o servidor
Você pode iniciar a aplicação a partir da sua IDE ou linha de comando. Para isso, é preciso ter maven instaldo em seu computador e emitir o seguinte comando:

`mvn spring-boot:run`

Com isso, o servidor será iniciado localmente na porta `8080` e ficará acessível a partir do seguinte endereço:

http://localhost:8080

## Usuário padrão
Em seu ambiente de desenvolvimento, a base de dados será populada, por padrão com dois usuários:

<table>
    <tr>
        <th>Nome de usuário</th><th>Senha</th>
    </tr>
    <tr>
        <td>atendente</td><td>senhasenha</td>
    </tr>
    <tr>
        <td>gerente</td><td>senhasenha</td>
    </tr>
</table>

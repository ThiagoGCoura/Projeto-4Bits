-- liquibase formatted sql

-- changeset 0811.theodoro:cria estruturas para autenticacao jdbc
create table users(
	username varchar(50) not null primary key,
	password varchar(500) not null,
	enabled boolean not null
);

create table authorities(
	username varchar(50) not null,
	authority varchar(50) not null,
	constraint fk_authorities_users foreign key(username) references users(username)
);

create unique index ix_auth_username on authorities (username,authority);
-- rollback truncate table authorities, users;

-- changeset 0811.theodoro:insere usuarios de teste (com a senha: senhasenha) context:dev
insert into users
	(username, password, enabled)
values
	('gerente', '{bcrypt}$2a$10$Uf0ik5n.nusCnxFC6JieM.QLtJjjMQ52vXDuDpl/gp1MOimfYyHU.', 1),
	('atendente', '{bcrypt}$2a$10$Uf0ik5n.nusCnxFC6JieM.QLtJjjMQ52vXDuDpl/gp1MOimfYyHU.', 1);

insert into authorities
	(username, authority)
values
	('gerente', 'MANAGER'),
	('atendente', 'USER');
-- rollback truncate table authorities;
-- rollback delete from users;

-- changeset 0811.theodoro:"cria estrutura basica"
create table veiculo (
    id_veiculo BIGINT auto_increment NOT NULL,
    marca varchar(100),
    modelo varchar(100),
    cor varchar(100),
    placa varchar(100),
    tipo varchar(100),
    CONSTRAINT veiculo_pk PRIMARY KEY (id_veiculo)
);

create table cliente (
    id_cliente BIGINT auto_increment NOT NULL,
    nome varchar(100) NULL,
    cpf varchar(100) NOT NULL,
    telefone varchar(100) NOT NULL,
    id_veiculo BIGINT not null,
    CONSTRAINT id_cliente_pk PRIMARY KEY (id_cliente),
    FOREIGN KEY (id_veiculo) REFERENCES veiculo(id_veiculo)
);

create table estadia (
    id_estadia BIGINT auto_increment NOT NULL,
    entrada DATETIME NOT NULL,
    saida DATETIME,
    id_cliente BIGINT NOT NULL,
    CONSTRAINT estadia_pk PRIMARY KEY (id_estadia),
    FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente)
);

create table vaga (
    id_vaga BIGINT auto_increment NOT NULL,
    numero varchar(100) NOT NULL,
    id_estadia BIGINT,
    CONSTRAINT vaga_pk PRIMARY KEY (id_vaga),
    FOREIGN KEY (id_estadia) REFERENCES estadia(id_estadia)
);

-- rollback drop table vaga;
-- rollback drop table estadia;
-- rollback drop table cliente;
-- rollback drop table veiculo;

-- changeset 0811.theodoro:"insere veiculo, vaga, tipoveiculo, estadia e cliente" context:dev
insert into veiculo
    (id_veiculo, marca, modelo, cor, placa, tipo)
values
    (1, 'Fiat', 'Palio', 'azul','ABC23D7', 'CARRO' );

insert into cliente
    (id_cliente, nome, cpf, telefone, id_veiculo)
values
    (1, 'Laercio Pereira', '12345678901', '11988888087', 1);

insert into estadia
    (id_estadia, entrada, id_cliente)
values
    (1, now(), 1);

insert into vaga
    (numero, id_estadia)
values
    ('78', 1);

-- rollback truncate table vaga, estadia, cliente, veiculo;

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
-- rollback drop table authorities, users;

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

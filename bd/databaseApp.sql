create database db_app_buscaMec;

use db_app_buscaMec;


        
create table tbl_cliente(
		id_cliente int not null auto_increment primary key,
        nome varchar(255) not null,
        sobrenome varchar(255) not null,
        cpf varchar(255) not null
      
        );
create table tbl_endereco(
		id_endereco int not null auto_increment primary key,
        rua varchar(30) not null,
        bairro varchar(30) not null,
        cidade varchar(30) not null,
        uf varchar(30) not null,
        numero varchar(30) not null,
        cep varchar(30) not null
);
           
create table tbl_user(
		id_user int not null auto_increment primary key,
		email varchar(255) not null,        
        senha varchar(255) not null, 
        id_user int not null,
        id_endereco int not null,
        telefone varchar(16) not null,
        celular varchar(16) not null,        
        foreign key (id_user) references tbl_cliente (id),
		foreign key (id_endereco) references tbl_endereco(id_endereco)
        );
                
        
create table tbl_veiculo (
		id_veiculo int not null auto_increment primary key,
		modelo varchar(30) not null, 
		marca  varchar(30) not null,
		cor varchar(30) not null,
		ano  varchar(4) not null,
		anoModelo  varchar(4) not null,
		placa  varchar(7) not null, 
        id_prop_carro int not null,
        foreign key (id_prop)  references tbl_cliente (id_cliente)
); 
create table tbl_mecanico(
		id_mecanico int not null auto_increment primary key,
		nome varchar(255) not null,
        sobrenome varchar(255) not null,
        cnpj varchar(255) not null
 );  
 create table tbl_oficina(
		id_oficina int not null auto_increment primary key,
        nome_mecanica varchar(30) not null,
        id_prop_mec int not null,
         foreign key (id_prop_mec)  references tbl_mecanico (id_mecanico)
 );
create table tbl_oferta_servico(
		id_oferta int not null auto_increment primary key,
        nome_oferta  varchar(30) not null,
        descricao	varchar(255) not null,
		valor_oferta decimal(10,2) not null,
        id_oficina_oferta int not null,
        foreign key (id_oficina_oferta) references tbl_oficina(id_oficina)
);	

     
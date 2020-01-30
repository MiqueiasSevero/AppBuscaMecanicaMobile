create database db_app_buscaMec;

use db_app_buscaMec;


        
create table tbl_cliente(
		id int not null auto_increment primary key,
        nome varchar(255) not null,
        sobrenome varchar(255) not null,
        cpf varchar(255) not null
      
        );
create table tbl_user(
		id int not null auto_increment primary key,
		email varchar(255) not null,        
        senha varchar(255) not null, 
        id_user int not null,
        foreign key (id_user) references tbl_cliente (id)
        );
                
        
create table tbl_veiculo (
		id_veiculo int not null auto_increment primary key,
		modelo varchar(30) not null, 
		marca  varchar(30) not null,
		cor varchar(30) not null,
		ano  varchar(4) not null,
		anoModelo  varchar(4) not null,
		placa  varchar(7) not null, 
        id_prop int not null,
        foreign key (id_prop)  references tbl_cliente (id)
);        
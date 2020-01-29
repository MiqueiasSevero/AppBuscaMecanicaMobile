create database db_app_buscaMec;

use db_app_buscaMec;

create table tbl_user_veiculo(
		id int not null auto_increment primary key,
		nome varchar(255) not null,
        sobrenome varchar(255) not null, 
        senha varchar(255) not null, 
        cep  char(7) not null,
        rua	varchar(255) not null,
        bairro varchar(255) not null,
        uf varchar(2) not null,
        numero varchar(6) not null,
        placa varchar(8) not null,
		marca varchar(255) not null,
		modelo varchar(255) not null,
		anoFab varchar(4) not null,
		anoMod varchar(4) not null
        );
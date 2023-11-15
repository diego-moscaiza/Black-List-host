create database primeraBaseDatos;
use primeraBaseDatos;

CREATE TABLE usuario (
	id int,
	tipo varchar(255),
	estado varchar(255),
	primary key(id)
);

INSERT INTO usuario (tipo, estado) VALUES ('normal', 'activo');
INSERT INTO usuario (tipo, estado) VALUES ('Admin', 'activo');

ALTER TABLE usuario MODIFY COLUMN id int auto_increment;

SELECT * FROM usuario;
SELECT * FROM usuario WHERE id = 1;
SELECT * FROM usuario WHERE estado = 'Activo' AND id = 1;

UPDATE usuario SET estado = 'Inactivo' where id = 2;

DELETE FROM usuario where id = 2;

# Consulta para mostrar la sintaxis SQL de una tabla existente.
show create table usuario;

CREATE TABLE `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tipo` varchar(255) DEFAULT NULL,
  `estado` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
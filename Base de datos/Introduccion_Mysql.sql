# ESTOS SON LOS COMANDAO PARA PODER CREAR UNA BASE DE DATOS Y SUS MODIFICACIONES

# Com. Crear BD y el nombre de la misma.
create database primeraBaseDatos;
# Com. para Mostrar las bases de datos existentes.
show databases;
#Com. para definir la bd especifica que se va a usar.
use primeraBaseDatos;

#Bloque de Com. para poder crear una tabla en la bd
CREATE TABLE usuario (
	# Las variables tiene un tipo de dato similar a programar
    # En algunos se les coloca la cantidad espeficia de caracteres que permite.
	id int,
	tipo varchar(255),
	estado varchar(255),
    # TODAS las tablas deben tener su llave primaria
	primary key(id)
);

#Com. para poder INSERTAR datos en la tabla definida
# Se puede seleccionar las columnas que se insertaran datos  y luego colocando los valores que uno desea.
INSERT INTO usuario (tipo, estado) VALUES ('normal', 'activo');
INSERT INTO usuario (tipo, estado) VALUES ('Admin', 'activo');

#Com. para poder ALTERAR datos de la tabla
# Se puede alterar la columna con su tipo de datos
ALTER TABLE usuario MODIFY COLUMN id int auto_increment;

# Com para mostrar los comandos de una Tabla que ya fue creada
#y que puede ser ejecutada también.
show create table usuario;

# En esta tabla se ven datos con valor NULL que puede ir vacios y otros que son
# NOT NULL que no permite valores vacios
CREATE TABLE `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tipo` varchar(255) DEFAULT NULL,
  `estado` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

# Com. para seleccionar los datos de una tabla
SELECT * FROM usuario;
SELECT * FROM usuario WHERE id = 1;
SELECT * FROM usuario WHERE estado = 'Activo' AND id = 1;

#Com. para Actualizar valores de un dato de la tabla 
# Donde uno desea hacer la modificacion.
UPDATE usuario SET estado = 'Inactivo' where id = 2;

#Com. para poder eliminar registros de una tabla.
# Ahora, MySQL viene con un modo activado por defecto para no elimnar cualquier dato
# Se tiene que especificar el ID del registro.
DELETE FROM usuario where id = 2;

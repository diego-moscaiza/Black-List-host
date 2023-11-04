# ¿Qué es programar?
Programar es definir datos e instrucciones a la computadora para que se ejecute las funciones requeridas.

# ¿Qué son los paradigmas de programación?
Los paradigmas de programación son formas de programara las cuales ya tienen una documentación y un propósito.

## Paradigmas de programación

### 1. Programación Imperativa:
Se define el codigo que se va a ejecutar, o sea tu mismo creas la secuencia de funciones que va a ejecutar. Dentro de este se encuentras otros tipos de paradigmas.


### 1.1. Programación Estructurada o secuencial:
Este es el primer paradigma de programación que normalmente se aprende y se caracteriza porque el codigo es escrito de arriba hacia abajo.

```
// EJEMPLO:
funcion saludar() {
	return ("hola mundo")
}

print (saludar)
```

### 1.2. Programación ORIENTADA A OBJETOS:
SE SEPARA EL SISTEMA EN ENTIDADES LLAMADAS "OBJETOS".
 EJEMPLO:
 Un usuario tiene atributos como: ("id", "nombre", "apellido", "edad", "cargo", etc).
 Y funciones como: {subirDatos(), actualizarInfo(), modificar(), etc}
 
 Y se manejan los archivos o directorios como "clases".
 Los temas involucrados son: "herencia", "polimorfismo".
 


### 2. Programación Declarativa:
Se declara lo que debe hacer el programa sin saber el procedimiento interno que realizará para poder ejecutar una funcionalidad. O sea que ya hay funciones y metodos que se encargarán del procedimiento.

> Por ejemplo: Cuando declaramos una sentencia SQL que nos muestre los datos de una tabla con la "lista de los mejores 10 países" y no sabemos la secuencia de pasos que hace por debajo pero nos arroja los datos solicitados.










### Programación FUNCIONAL:
- DIVIDE EL PROGRAMA EN DIVERSAS PARTES, PERO CON LA PARTICULARIDAD DE QUE CADA UNO ES UNA "FUNCIÓN" LA CUAL SE ENCARGA DE UNA SOLA TAREA. LUEGO SE PASAN LOS DATOS ENTRE LAS FUNCIONES.

EJEMPLO:
- PARA INICIAR SESIÓN, UNA FUNCIÓN EVALUA LOS DATOS INGRESADOS Y LUEGO OTRA FUNCIÓN PUEDE MOSTRAR UNA NOTIFICACION DE QUE INICIÓ SESION O UN ERROR AL INGRESAR LOS DATOS, LUEGO DENTRO DE LA APLICACIÓN OTRA FUNCION SE ENCARGARÁ DE MOSTRAR NOTIFICACIONES SI LAS HUBIESE.

- SE MANEJA LOS CONCEPTOS DE: "FUNCIONES PURAS", "RECURSIVIDAD"
- AQUI NO SE MANEJAN LOS CONCEPTOS DE CICLOS NI CONDICIONALES.

### Programación REACTIVA:

- LA PARTICULARIDAD AQUI ES QUE EL PROGRAMA ESTA OBSERVANDO LOS CAMBIOS EN UN FLUJO DE DATOS O STREAM DE DATOS Y REACCIONA CAMBIANDO EL ESTADO DE LOS DATOS.

- EJEMPLOS: ACTUALIZACIONES EN LOS MENSAJES DE CAHT O TRANSMISION EN VIVO, LOS VIDEOS EN VIVO, LOS CAMBIOS DE LA RUTA DE UN VEHICULO EN UNA APP.
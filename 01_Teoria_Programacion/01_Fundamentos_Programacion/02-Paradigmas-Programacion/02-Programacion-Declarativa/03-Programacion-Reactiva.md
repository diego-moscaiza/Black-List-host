# 3. Programación reactiva

La programación reactiva es un paradigma de programación relativamente nuevo, y está enfocado en el trabajo con flujos de datos finitos o infinitos de manera asíncrona (streams), permitiendo que estos datos se propaguen generando cambios en la aplicación, es decir, “reaccionen” a los datos ejecutando una serie de eventos

Está basado en principio de empujar (push) y no de obtener (pull). Los valores se "emiten" cuando están listos, no cuando se solicitan, pudiendo ejecutarse de una manera "no bloqueante" (non-blocking) y con esto permite realizar operaciones en paralelo en lugar de forma serial.

Elementos teoricos de la programación reactiva:

**1. Observable**
Objeto que entrega un conjunto de valores en un futuro.

**2. Operator**
Funciones puras que realizan operaciones.

**3. Pipe**
Envía los resultados de un `operator` a otro.

**4. Observer**
Es el objeto que se suscribe a un `observable` y es capaz de reaccionar cuando los datos cambias.

**5. Suscribción**
Es la función que permite al `observer` suscribirse al `observable` para estar al tanto de los cambios.

**6. Subjetcs**
Es un componente que se conecta al `observable` y propaga los cambios al `observable`.

> Ejemplos de uso de este paradigma:
> - El cambio de la calidad de video dependiendo de la velocidad de internet del usuario en aplicaciones como Youtube, Netflix, Twitch, etc.
> - Los cambios en la ruta de un vehiculo en una aplicación como google maps.


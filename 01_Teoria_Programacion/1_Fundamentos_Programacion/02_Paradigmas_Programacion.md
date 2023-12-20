# Paradigmas de programación

## ¿Qué son los paradigmas de programación?
Los paradigmas de programación son formas de programara las cuales ya tienen una documentación y un propósito.

## 1. Programación imperativa:
Se definen las instrucciones paso a paso (cómo) redactadas para el ordenador. Describen de forma explícita qué pasos deben llevarse a cabo y en qué secuencia para alcanzar finalmente la solución deseada. Tambien se utilizan métodos o funcoines que alteran el estado de un programa.

Dentro de este se encuentras otros tipos de paradigmas como: "Programación Estructurada o secuencial" y "Programación orientada a objetos" (POO).

### 1.1. Programación estructurada o secuencial:
Este es el primer paradigma de programación que normalmente se aprende y se caracteriza porque el codigo es escrito de arriba hacia abajo.

```
// Ejemplo:
funcion saludar() {
	return ("hola mundo")
}

print (saludar)
```

### 1.2. Programación orientada a objetos:
Este paradigma parte del concepto de "objetos" como base, los cuales contienen información en forma de campos (atributos) y código en forma de métodos.

Las "clases" son las plantillas para crear los "objetos" y cada uno de estos es una instancia de su "clase".

> Ejemplo:
> Un usuario tiene atributos como: ("id", "nombre", "apellido", "edad", "cargo", etc).
> Y métodos o funciones como: {subirDatos(), actualizarInfo(), modificar(), etc}

Los temas involucrados son: abstracción, encapsulamiento, polimorfismo y herencia.

1. Abstracción: Es el proceso de definir los atributos y los métodos de una clase.
2. Encapsulamiento: Protege la información de manipulaciones no autorizadas.
3. Polimorfismo: Da la misma orden a varos objetos para que respondan de diferentes maneras.
4. Herencia: La "clase hijo" heredan atributos y métodos de la "clase padre".

## 2. Programación declarativa:
Se declara lo que debe hacer el programa sin saber el procedimiento interno que realizará para poder ejecutar una funcionalidad. O sea, ya hay funciones y metodos que se encargarán del procedimiento.

> Ejemplo:
> Cuando declaramos una sentencia SQL que nos muestre los datos de una tabla con la "lista de los mejores 10 países" y no sabemos la secuencia de pasos que hace por debajo pero nos arroja los datos solicitados.

Dentro de este se encuentras otros tipos de paradigmas como: "Programación funcional", "Programación lógica" y "Programación reactiva"

### 2.1. Programación funcional:
Se basa en cálculo lambda y concretamente en composición de funciones puras para modelar las soluciones de software.

Así las características que definen al paradigma funcional hoy por hoy son las siguientes:

1. No hay estado global.
2. Todas las funciones son puras: Dado un mismo input siempre devolvemos el mismo output.
3. Todos los valores son inmutables: Lo único que podemos hacer es generar nuevos valores.
4. No hay bucles: La iteración se realiza usando recursividad, o sea una función que se llama a si misma y en esta debe haber una condición de terminación.

> Como el modelo de cálculo lambda carecía de “cinta” para conservar el estado del programa, este se tenía que ir regenerando a través de la composición de funciones y la recursividad.

Un buen ejemplo de cómo podemos crear cualquier cosa usando funciones es la lógica combinatoria, una variante del cálculo lambda que provee un set limitado de funciones combinadoras:

```javascript
// funciones combinadoras

const I = x => x;
const K = x => y => x;
const V = x => y => z => z(x)(y);

// implementación de una tupla
const first = I;
const second = K(I);
const tuple = V;

const myTuple = tuple('Hello')('World');
myTuple(first); // 'Hello'
myTuple(second); // 'World'
```

### 2.2. Programación lógica:
La programación lógica se entiende como el mecanismo donde el usuario debe hacerse cargo de programar el ordenador para que sea capaz de tomar decisiones propias basándose en los postulados y parámetros de la lógica matemática.

Se basa en la lógica de primer orden o cálculo de predicados o sea la relación entre elementos y se caracteriza por concebir un programa como una colección de hechos (verdades) y reglas.

Los programas lógicos suelen usarse para la inferencia (deducción) de la información; por ejemplo: para simular el razonamiento de la intenligencia artificial, o sea que se debe interpretar o entender la información otorgada para dar una respuesta.

Características:

1. Variables lógicas: Son variables que pueden actuar como variables de entrada pero también de salida

```
//Ejemplo:
arbol(palmera)
vegetal(x):- arbol(x)

vegetal(perro) > False // Entrada.
vegetal(x) > palmera // Salida.
```

2. Iversibilidad: Permiten usar un predicado para extraer información o para validarlo

```
?arbol(palmera) // Nos dice si una palmera es un árbol.
?arbol(x) // Nos dice todos los árboles que hay.
```

3. SDL-resolucion: El mecanismo de inferencia que utiliza la programación lógica es "SDL-resolucion". Consiste en crear un árbol de búsqueda que explora todas las posibles respuestas.

```
padre(juan, luis)
padre(luis, ana)

abuelo(x, y):- padre(x,z), padre(z, y)
// En este caso si la Z vale luis "{Z/Luis} es cierto!".
```

4. Recursividad: No existe los bucles iterativos como *for*, *while*, *do*. Todos los bucles son recursivos o sea una función que se llama a si misma y en esta debe haber una condición de terminación.

```
// Ejemplo de recursividad
long factorial (long n){
	if (n==0)
		return 1;
	return n * factorial (n-1); // Aqui se realiza la recursividad
}

// Ejecucióm:

factorial(3)
	// Primera llamada:
	=> 3 * factorial(2)                ->  3 * '2' = 6
		// Segunda llamada:
		=> 2 * factorial(1)            ->  2 * "1" = '2'
			// Tercera llamada:
			=> 1 * factorial(0)        ->  1 * 1 = "1"
				// Cuarta llamada:
					1 // Condición de salida
```

5. Múltiples soluciones: El mecanismo conocico como "backtracking" permite que la invocación a un predicado devuelva múltiples soluciones, una por cada rama de éxito en el árbol de resolución SLD.

```
// Programa lógico
arbol(palmera)
arbol(nogal)
flor(margarita)

> arbol(x)
> palmera;
> nogal;
> false // ya no se entrega más soluciones.
```


### 2.3. Programación reactiva:

Es un paradigma de programación enfocado en el trabajo con flujos de datos finitos o infinitos de manera asíncrona (streams), permitiendo que estos datos se propaguen generando cambios en la aplicación, es decir, “reaccionen” a los datos ejecutando una serie de eventos

Está basado en principio de empujar (push) y no de obtener (pull). Los valores se "emiten" cuando están listos, no cuando se solicitan, pudiendo ejecutarse de una manera "no bloqueante" (non-blocking) y con esto permite realizar operaciones en paralelo en lugar de forma serial.

Elementos teoricos de la programación reactiva:
1. **Observable**: Objeto que entrega un consjunto de valores en un futuro.
2. **Pipe**: Envía los resultados de un *"operator"* a otro.
3. **Operator**: Funciones puras que realizan operaciones.
4. **Observer**: Se suscribe a un *"observable"* y es capaz de reaccionar cuando los datos cambias.
5. **Suscribción**: Es la función que permite suscribirse al *"observable"* para estar al tanto de los cambios.
6. **Subjetcs**: Es un componente que se conecta al *"observable"* y propaga los cambios al *"observer"*.

> Ejemplo:
> - El cambio de la calidad de video dependiendo de la velocidad de internet del usuario en aplicaciones como Youtube, Netflix, Twitch, etc.
> - Los cambios en la ruta de un vehiculo en una aplicación como google maps.
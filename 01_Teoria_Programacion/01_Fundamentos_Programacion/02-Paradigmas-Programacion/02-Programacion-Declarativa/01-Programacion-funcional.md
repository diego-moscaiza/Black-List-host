# 1. Programación funcional

La programación funcional es un paradigma centrado en la creación y uso únicamente de funciones para la ejecución de los procesos. En este paradigma las funciones son tratadas como `ciudadanos o funciones de primera clase`, o sea que se puede usar como variables, argumentos de otras funciones y valores de retorno.

**Ejemplos:**

1. Asignar función a una variable

```js
const miFuncion = function () {
	console.log("foobar");
};

// Invocación usando una variable
miFuncion();
```

2. Pasar una función como argumento

```js
function diHola() {
	return "Hola ";
}

function saludar(saludo, nombre) {
	console.log(saludo() + nombre);
}

// Pasamos `diHola` como argumento de la función `saludar`
saludar(diHola, "JavaScript!");
```

3. Devolver una función

```js
function diHola() {
	return function () {
		console.log("¡Hola!");
	};
}

// Hay 2 alternativas para invocar a una función y a su vez retornar su función anónima:

// 1. Usando una variable
const miFuncion = diHola();
miFuncion();

// 2. Usando paréntesis doble
diHola()();
```

Este paradigma se basa en el `cálculo lambda`, el cual es una proposición o teorema matemático donde las tareas se basan en definir un sistema de funciones para ejecutar la sustitución o reemplazo de variables. Aqui las funciones se las conoce como `expresiones lambda`.

El cuerpo de la expresión lambda consta de los parámetros usando paréntesis, luego viene el operador lambda usando una flecha, y por último el cuerpo de la función usando llaves.

**Ejemplos:**

1. Cuando sólo hay un parámetro, se puede omitir el uso de paréntesis. Si el cuerpo de la función sea solo una línea de ejecución, se puede omitir uso de corchetes.

```js
let multiplicar = n => n * 2;

alert( multiplicar(3) ); // 6
```

2. Cuando no hay parámetros para definir, solo se deja un paréntesis vacío. Si el cuerpo de la función tiene más de una línea de ejecución, se deben usar las llaves.

```js
const otraFuncion = () => {
    let message = "Yes, I'm an arrowFunction, again ツ"
    return message
    // return "Yes, I'm an arrowFunction, again ツ" // Devuelve lo mismo
}
```

En programación, el nombre técnico utilizado para referirnos a las expresiones lambda son las `funciones anónimas` ya que en cálculo lambda no se describe el nombre de una función.

Un ejemplo de cómo podemos crear cualquier cosa usando funciones es la lógica combinatoria, una variante del cálculo lambda que provee un set limitado de funciones combinadoras.

Este paradigma tiene los siguientes principios:

**1. Inmutabilidad**
No se puede cambiar el valor de los atributos declarados, lo único que podemos hacer es generar nuevos valores a través de la ejecución de las funciones.

**2. Funciones puras** 
Las funciones puras produce el mismo resultado cuando se llama con los mismos argumentos y que no tiene efectos secundarios, es decir, no modifica ni depende del estado externo. Este principio esta relacionado con la inmutabilidad

No permite el almacenamiento de estado y esto evita los efectos colatelares. Al llamar a una función multiples veces con las misma entradas siempre devolverá los mismos resultados y esta no se verá afectado por condiciones externas o estados almacenados previamente. A esto se le conoce como transparencia referencial que significa que se puede reemplazar cualquier referencia a una funcion por el valor que retorna.

**Ejemplos:**

Función pura:

```java
int sumar(int primero, int segundo) {
	return primero + segundo;
}

// LLamando a la funcion sumar()
sumar(3, 4);
```

Función impura:

```java
void suma(int primero, int segundo) {
	resultado = primero + segundo;
	System.out.println(resultado);
}

// LLamando a la funcion suma()
suma(3, 4);
```

**3. Recursividad** 
Se realiza usando recursividad, que es el proceso donde se llama a la función a si misma y en esta debe haber una condición de terminación. No se puede usar la iteración a través de blucles como `for` y `while` en este paradigma.

**Ejemplo:**

```java
public class Factorial {
	int num = 5;
	long factorial = calcularFactorial(num);
	System.out.println("El factorial de " + num + " es " + factorial);

	public long calcularFactorial(int num) {
	    if (num == 0 || num == 1) {
	        return 1;
	    } else {
			// Retornará la función a si misma con argumentos
	        return num * calcularFactorial(num - 1);
	    }
	}
}
```

**4. Función de orden superior**
Una función de orden superior recibe otra función como argumento o que retorna una función, en otras palabras es una función que se ejecuta sobre otra función. Cabe recalcar que las funciones de orden superior cumple con caracteristicas de las funciones de primera clase, pero no se deben confundir y ni decir que son lo mismo.

**Ejemplos:**

```java
// Ejemplo en Java
List<Integer> numeros = List.of(18, 6, 4, 15, 55, 78, 12, 9, 8);

Long result = numeros.stream().filter(num -> num > 10).count();
System.out.println(result);
// Resultado: 5. Da este resultado por cuenta la cantidad de numeros mayores a 10.
```

```js
// Ejemplo en JavaScript
const list = [1, 2, 3, 4, 5];

const squared = list.map(x => x ** 2);
// => [1, 4, 9, 16, 25]

const product = list.reduce((acc, item) => acc * item, 1);
// => 120
```
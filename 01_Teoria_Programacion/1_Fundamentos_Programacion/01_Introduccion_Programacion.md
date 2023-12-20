# Introducción a la programación

## ¿Qué es programar?
Programar es definir datos e instrucciones para que la computadora se encarge de ejecutarlas.

## 1. Datos

Un dato es la información sobre algo específico, en programación un dato es un valor que puede tener un tipo de dato.

Existen varios tipos de datos y se conocen 2 grupos:

### 1.1. Primitivos

Los primitivos, también conocidos como simples, entre los primitivos se encuentran los enteros, decimales, los caractéres y los boolenaos

Ejemplos:
- 5 y 49.99 son numéricos
- A es un caractér
- True es un booleano

### 1.2. Objetos

Los objetos conocidos como estructurados son todo aquellos que no es de tipo primitivo y se crean a partir de funciones y clases, estos pueden contener varios datos a la vez, entre estos están las cadenas de texto, las arreglos, listas y diccionarios, funciones y clases.

Ejemplos:
- 'Nombre' es una cadena de texto
- [a, b, c] es un arreglo


## 2. Variables

Una variable es un nombre que se refiere a un dato o valor. Una característica de un lenguaje de programación es la capacidad de manipular las variables.

Indicaciones para poder crear variables:
1. No pueden iniciar con un número
2. No pueden llevar caracteres especiales
3. No pueden llevar el nombre de palabras reservadas del lenguaje

Ejemplos:

- Almacene en una variable la edad de un usuario que tiene 20 años: **edad = 20**
- Almacene en una variable un mensaje de bienvenida: **mensaje = "Bienvenido"**

## 3. Constantes

Una constante es similar a la variable solo que esta no cambia su valor. En varios lenguajes se define con la palabra reservada **const**, en otros varia y se puede encontrar solo convenciones para nombrar las constantes con el UPPER_SNAKE_CASE.

## 4. Operadores aritméticos y jerarquía

### 4.1. Operadores aritméticos
Los operadores aritméticos son los símbolos utilizados en la aritmética para representar operaciones matemáticas como la suma, resta, multiplicación y división. Los valores a los cuales se aplican esos operadores reciben el nombre de operandos.

Ejemplos:

- Suma: 10 + 100 = 110
- Resta: 79 - 12 = 67
- Multiplicacion: 70 * 10 = 700
- División: 90 / 5 = 18
- Módulo: 24 % 2 = 0
- Division Entera: 90 // 7 = 12 con resto 6 (12 y 6/7)
- Exponenciacion: 90 ** 3 = 729.000

> El modulo es el resto o residuo de una división y la división entera se dice cuando su resto es distinto de cero.


### 4.2. Jerarquía de operaciones
Cuando se presentan muchas operaciones aritméticas, la jerarquía determina el orden con el que deben realizarse esas operaciones 

- Parentesis: Lo primero que se realiza en una operación es lo que está dentro de este.
- Exponenciación: Si el programa detecta una exponenciación, es el segundo proceso que realiza.
- Multiplicación y división: Ocupa el penúltimo escalón de la operación.
- Suma y resta: Inicia por la izquierda

## 5. Condicionales

Las condicionales son segmentos de código que permiten elegir entre la ejecución de una acción u otra dentro de un programa. Se puede pensar de la siguiente forma: "Si se cumple un resultado, se llevará a cabo una tarea o sino se realizará otra" y también se puede decir "sino se cumple lo anterior y si se cumple otro resultado se realizará una tarea distinta".

### 5.1. If, else y else if

- **if**: Es la palabra reservada que significa 'Si' de forma condicional y es utilizara para que realice una acción si se cumple un resultado o un evento 

- **else**: Esta palabra significa 'Sino' de forma condicional. Se puede colocar después de un **if** o **else if** en dado caso no se cumpla la condición

- **else if** o **elif**: Se utiliza cuando se combinan varias opciones que el programa debe elegir. Esta debe de ir antes de un **else** para que puede ser ejecutada.


### 5.2. Switch case

El condicional switch case es una estructura que evalúa más de un caso y se caracteriza por la selección de una opción entre varias. Switch recibe un 'caso' y lo evalúa hasta encontrar el caso que corresponda. En cada caso se termina con la palabra 'break' es una forma de detener un bucle al llegar a una condición ya definida y se puede usar la opción 'default' para cuando no se encuentra el caso deseado y queramos dar un resultado por defecto. 


## 6. Bucles

Los bucles o ciclos, también conocidos como estructuras de control de flujo en la programación, permiten que se repitan las veces que se cumpla una condición determinada. Estos poseen un iterador, o sea un contador que puede incrementarse o decrementarse y es importante que tengan uno, de otra forma el bucle sería infinito.


### 6.1 For

La instrucción for es un tipo de bucle que permite repetir una instrucción o una instrucción compuesta un número especificado de veces. El cuerpo de una instrucción for se ejecuta cero o más veces hasta que una condición ya no se cumpla.

```
// Estructura del Bucle For

for <Contador> in <Nombre de lista>:
    <Segmento de Código>
```

```python
# Ejemplo de For en Python:

numeros = [1, 2, 3, 4]

for numero in numeros:
    print(numero)
```

```java
// Ejemplo de For en Java:

public static void bucleFor() {
    for(int i = 500; i <= 1000; i+=2) {
        System.out.println(i);
    }
}
```

### 6.2 Bucle While

La instrucción while es una estructura de control de flujo en la programación que se utiliza para repetir un bloque de código, mientras que se cumpla una condición determinada. En esta estructura, la condición es una expresión booleana que se evalúa en cada iteración del ciclo.

```
// Estructura del Bucle While

while <condición>:
    <Instrucciones de Código>
    <Incrementar o decrementar el Contador>
```

```python
# Ejemplo de while en Python:

n = 5 

while n > 0: 
	print(n)
	n = n - 1 
```

```java
// Ejemplo de While en Java:

public static void bucleWhile() {
    int entero = 100;
    int emergencia = 911;

    while (entero <= emergencia) {
        System.out.println(entero);
        entero++;
    }
}
```

## 7. Funciones

En el contexto de la programación, una función es una secuencia de sentencias que realizan una operación y que reciben un nombre. Cuando se define una función, se especifica el nombre y la secuencia de sentencias. Más adelante, se puede “llamar” a la función por ese nombre.


```python
# Ejemplo de una función en Python:

def Funcion():
	print("Soy una función")
```

### 7.1. Parametros

Son variables que se definen al declarar funciones, las cuales van a ser utilizadas para enviar valores al hacer un llamado a la función.

```python
def Funcion(mensaje):
    print(mensaje)
```

### 7.2. Argumentos

Son los valores que van a tomar cada uno de los parámetros que se han definido en las funciones.

```python
def Funcion(mensaje):
    print(mensaje)

Funcion("Hola Mundo")

# Salida: Hola Mundo
```
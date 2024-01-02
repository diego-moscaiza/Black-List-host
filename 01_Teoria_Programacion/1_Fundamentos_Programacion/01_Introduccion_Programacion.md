# Introducción a la programación

La programación es un proceso en el cual se definen valores e instrucciones para que la computadora se encarge de ejecutarlas con el fin de resolver una tarea. Todo programa implementa un algoritmo, el cual es el procedimiento o sencuancia de pasos que deben ocurrir para obtener un resultado.

## 1. Datos o Valores

Un dato es la información sobre algo específico, como la información de una persona donde se ven su nombre y apellidos, su edad y etc.
En programación un dato es un valor que puede tener un tipo de dato.

Existen varios tipos de datos y se conocen 2 grupos:

### 1.1. Primitivos

Los primitivos, también conocidos como simples, entre los primitivos se encuentran los enteros, decimales, los caractéres y los boolenaos

```java
// Ejemplos:
// Datos de tipo numérico
int numero = 5;
double decimal = 49.99;

// Datos de tipo caractér
char letra = 'A';

// Datos de tipo booleano
boolean autorizado = true;
```

### 1.2. Objetos

Los objetos conocidos como estructurados son todo aquellos que no es de tipo primitivo y se crean a partir de funciones y clases, estos pueden contener varios datos a la vez, entre estos están las cadenas de texto, las arreglos, listas y diccionarios, funciones y clases.

```java
// Ejemplos:
//Tipo de dato cadena
String nombre = "Juan";

// Arreglo que solo contiene datos de tipo Cadena
String[] animals = { "dog","cat", "turtle" };
```

## 2. Variables

Una variable es un nombre que se refiere a un dato o valor. Una característica de un lenguaje de programación es la capacidad de manipular las variables.

```python
# Ejemplos:

# Cree una varriable que almacene la edad de un usuario que tiene 20 años:
edad_usuario = 20
# Cree una varriable que almacene un mensaje de bienvenida:
mensaje = "Bienvenido"
```

>Indicaciones para poder crear variables:
>1. No pueden iniciar con un número
>2. No pueden llevar caracteres especiales
>3. No pueden llevar el nombre de palabras reservadas del lenguaje

## 3. Constantes

Una constante es similar a la variable solo que esta no cambia su valor. En varios lenguajes se define con la palabra reservada **const**, en otros varia y se puede encontrar solo convenciones para nombrar las constantes con el UPPER_SNAKE_CASE.

## 4. Operadores

### 4.1. Operadores aritméticos

Los operadores aritméticos son los símbolos utilizados en la aritmética para representar operaciones matemáticas como la suma, resta, multiplicación y división. Los valores a los cuales se aplican esos operadores reciben el nombre de operandos.


```python
# Ejemplos:

# Suma
10 + 100 # Resultado: 110

# Resta
79 - 12 # Resultado: 67

# Multiplicacion
70 * 10 # Resultado: 700

# División
90 / 5 # Resultado: 18

# Módulo
24 % 2 # Resultado: 0

# Division Entera
90 // 7 # Resultado: 12 con resto 6 (12 y 6/7)

# Exponenciacion
90 ** 3 # Resultado: 729.000
```

> El modulo es el resto o residuo de una división y la división entera se dice cuando su resto es distinto de cero.

#### Jerarquía de operaciones
Cuando se presentan operaciones aritméticas combinadas, la jerarquía determina el orden con el que deben realizarse esas operaciones. No se debe olvidar de que se siempre se resuelve de izquierda a derecha.

1. **Paréntesis**: Lo primero que se realiza en una operación es lo que está dentro de los paréntesis. Hay otros simbolos como `corchetes` y `llaves`  y su orden es: primero los paréntesis, seguido de corchetes y al final las llaves.
<br>
2. **Potencia y raíz**: Las potencias o exponenciaciones y las raices se resuelven en segundo lugar.
<br>
3. **Multiplicación y división**: Si en la operación se encuentran los anteriores puntos, este se resuelve en tercer y penúltimo lugar.
<br>
4. **Suma y resta**: En la jerarquía se resuelven al ultimo lugar.

```python
# Ejecución de una operación combinada con Python:
operacion_combinada = 14 / (3 + 4) + 9 - 10 / 2
print(operacion_combinada)
```

### 4.2. Operadores comparativos

Los operadores de comparación también conocidos como relacionales, comparan sus operandos. Se utilizan para comparar, probar o evaluar la relación entre diferentes valores.

```python
# '==' compara tanto en valor como el tipo de dato.
print(4 == 4) # True.
print(4 == '4') # False.

# '!=' si NO son iguales, tanto en valor como tipo de dato
# '!' sirve para indicar una negación.
print(4 != 5) # True.

# Usamos los operadores '<', '>', '<=', '>='.
print(4 < 5) # True.
print(4 > 5) # False.
print(4 >= 5) # True.
print(4 <= 5) # False.
```

### 4.3. Operadores Lógicos

Los operadores lógicos se usan para combinar dos valores Booleanos y devolver un resultado verdadero, falso o nulo. Los operadores lógicos también se denominan operadores Booleanos. Devuelve True cuando `Expresión1` y `Expresión2` son verdaderas.

```python
# Operador 'and'
print(True and True) # Verdadero
print(True and False) # Falso
print(False and True) # Falso
print(False and False) # Falso

# Operador 'or'
print(True or True) # Verdadero
print(True or False) # Verdadero
print(False or True) # Verdadero
print(False or False) # Falso

# Operador 'not'
print(not True) # Devuelve 'False'.
print(not False) # Devuelve 'True'.
```

### 4.4. Operadores Especiales

En los lenguajes de programación existen operadores que normalmente no se ven en los ejercicios de matemática, a continuación se mostrarán unos cuantos.

**Operadores de asignación**

- Asignación simple `(=)`:
`x = y`
<br>

- Asignación de negación `(!=)`:
`x != y`. Niega que el valor de la izquierda es igual al de la derecha.
<br>

- Asignación de adición `(+=)`:
`x += 3`. Equivalente: `x = x + 3`
<br>
- Asignación de sustracción `(-=)`:
`x -= 3`. Equivalente: `x = x - 3`
<br>

- Asignación de multiplicación `(*=)`:
`x *= 3`. Equivalente: `x = x * 3`
<br>

- Asignación de división `(/=)`:
`x /= 3`. Equivalente: `x = x / 3`
<br>

- Asignación de módulo `(%=)`:
`x %= 3`. Equivalente: `x = x % 6`
<br>

**Operadores a nivel de bit**

- Asignación de desplazamiento a la izquierda `(<<=)`:
`x <<= 1`. Equivalente: `x vale 12`
<br>

- Asignación de desplazamiento a la derecha `(>>=)`:
`x >>= 3`. Equivalente: `x vale 3`
<br>

- Asignación de AND `(&=)`:
`x &= 1`. Equivalente: `x vale 0`
<br>

- Asignación de OR `(|=)`:
`x |= 1`. Equivalente: `x vale 7`
<br>

- Asignación de XOR u OR exclusivo `(^=)`:
`x ^= 1`. Equivalente: `x vale 7`


## 5. Condicionales

Las condicionales son segmentos de código que permiten elegir entre la ejecución de una acción u otra dentro de un programa. Se puede pensar de la siguiente forma: "Si se cumple un resultado, se llevará a cabo una tarea o sino se realizará otra" y también se puede decir "sino se cumple lo anterior y si se cumple otro resultado se realizará una tarea distinta".

### 5.1. If, else y else if

- **if**: Es la palabra reservada que significa 'Si' de forma condicional y es utilizara para que realice una acción si se cumple un resultado o un evento.

- **else**: Esta palabra significa 'Sino' de forma condicional. Se puede colocar después de un **if** o **else if** en dado caso no se cumpla la condición

- **else if** o **elif**: Se utiliza cuando se combinan varias opciones que el programa debe elegir. Esta debe de ir antes de un **else** para que puede ser ejecutada.

```c
int a = 10;
int b = 20;

if (a > b) {
    printf("a is greater than b\n");
} else if (a < b) {
    printf("a is less than b\n");
} else {
    printf("a is equal to b\n");
}
```

### 5.2. Switch case

El condicional switch case es una estructura que evalúa más de un caso y se caracteriza por la selección de una opción entre varias. Switch recibe un 'caso' y lo evalúa hasta encontrar el caso que corresponda. En cada caso se termina con la palabra 'break' es una forma de detener un bucle al llegar a una condición ya definida y se puede usar la opción 'default' para cuando no se encuentra el caso deseado y queramos dar un resultado por defecto.

```csharp
string color = "amarillo";

switch (color)
{
    case "verde":
        Console.WriteLine("Exito");
        break;
    case "amarillo":
        Console.WriteLine("Advertencia");
        break;
    default:
        Console.WriteLine("Error");
        break;
}
```


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

## 8. Clases

Una clase es una entidad que contiene atributos y métodos, odicho de otra forma datos y funciones que representas conceptos de la vida real y que puede ser empleados para crear  en programación objetos que contengan información de usuarios, noticias, categorías, partidas, imágenes, mensajes, etc. Una vez creada una clase, los objetos que se crean a partir de estas son llamadas instancias.

```javascript
// Ejemplo de una clase en JavaScript.

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}

const man = new Person("Ryan", "Ray");
```
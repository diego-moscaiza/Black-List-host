# Bucles

Los bucles o ciclos, también conocidos como estructuras de control de flujo en la programación, permiten que se repitan las veces que se cumpla una condición determinada. Estos poseen un iterador, o sea un contador que puede incrementarse o decrementarse y es importante que tengan uno, de otra forma el bucle sería infinito.

## Bucle For

La instrucción for es un tipo de bucle que permite repetir una instrucción o una instrucción compuesta un número especificado de veces. El cuerpo de una instrucción for se ejecuta cero o más veces hasta que una condición ya no se cumpla.

```python
# Ejemplo de For en Python:

numeros = [1, 2, 3, 4]

for numero in numeros:
    print(numero)
```

```java
// Ejemplo de For en Java:

for (int i = 500; i <= 1000; i+=2) {
    System.out.println(i);
}
```

## 2 Bucle While

La instrucción while es una estructura de control de flujo en la programación que se utiliza para repetir un bloque de código, mientras que se cumpla una condición determinada. En esta estructura, la condición es una expresión booleana que se evalúa en cada iteración del ciclo.

```python
# Ejemplo de while en Python:

n = 5

while n > 0:
	print(n)
	n = n - 1
```

```java
// Ejemplo de While en Java:

int entero = 100;
int emergencia = 911;

while (entero <= emergencia) {
    System.out.println(entero);
    entero++;
}
```

# Condicionales

Las condicionales son segmentos de código que permiten elegir entre la ejecución de una acción u otra dentro de un programa. Se puede pensar de la siguiente forma: "Si se cumple un resultado, se llevará a cabo una tarea o sino se realizará otra" y también se puede decir "sino se cumple lo anterior y si se cumple otro resultado se realizará una tarea distinta".

## 1. If, else y else if.

- `if`: Es la palabra reservada que significa 'Si' de forma condicional y es utilizara para que realice una acción si se cumple un resultado o un evento.

- `else`: Esta palabra significa 'Sino' de forma condicional. Se puede colocar después de un `if` o `else if` en dado caso no se cumpla la condición

- `else if` o `elif`: Se utiliza cuando se combinan varias opciones que el programa debe elegir. Esta debe de ir antes de un `else` para que puede ser ejecutada.

```python
# If, else y elif con python

precio_arroz = 10;
precio_pollo = 20;

if (precio_arroz > precio_pollo) {
    print("El arroz cuesta más que el pollo.");
} elif (precio_arroz < precio_pollo) {
    print("El arroz cuesta menos que el pollo.");
} else {
    print("El arroz y pollo cuestan lo mismo.");
}
```

```java
// If, else y else if en Java

int entero = 7;

if (entero == 99) {
    System.out.println("Es 99");
} else if (entero == 100) {
    System.out.println("Es 100");
} else {
    System.out.println("No es 99 ni 100");
}
```

## 2. Switch case

El condicional switch case es una estructura que evalúa más de un caso y se caracteriza por la selección de una opción entre varias. Switch recibe un 'caso' y lo evalúa hasta encontrar el caso que corresponda.

Para cada caso se usa la palabra reservada `case` y, dependiendo del lenguaje, se puede o no utilizar la palabra reservada `break` para cerrar el bucle al llegar a una condición esperada y se puede usar la opción `default` para cuando no se encuentra el caso deseado y queramos dar un resultado por defecto.


```python
# A partir de Python versión 3.10 se añadió 'match case' similar a 'switch case'

color = 'verde'

match color:
    case 'verde':
        print('Exito')
    case 'amarillo':
        print('Advertencia')
    case _: # Para capturar situaciones adicionales
        print('Error')
```

```java
// "Switch - Case" con Java.

String color = "verde";

switch (color) {
    case "verde":
        System.out.println("Exito!");
        break;
    case "amarillo":
        System.out.println("Advertencia!");
        break;
    default:
        System.out.println("Error!");
    break;
}
```

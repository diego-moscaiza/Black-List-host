# Funciones

En el contexto de la programación, una función es una secuencia de sentencias que realizan una operación y que reciben un nombre. Cuando se define una función, se especifica el nombre y la secuencia de sentencias. Más adelante, se puede “llamar” a la función por ese nombre.

**Ejemplos:**

```python
# Ejemplo de una función en Python:

def Funcion():
	print("Soy una función")
```

```java
// Ejemplo de una función en Python:

void Funcion() {
    System.out.println("Soy una función");
}
```

## 1. Parametros

Son variables que se definen al declarar funciones, las cuales van dentro de los paréntesis de la función. 
Los parámetros son utilizados para enviar valores al hacer un llamado a la función.

**Ejemplos:**

Creamos la funcion de sumar():

```python
# Funcion sumar() en Python.
def sumar(primero, segundo):
    return primero + segundo
```

```java
// Funcion sumar() en Java.
Integer sumar(Integer primero, Integer segundo) {
    return primero + segundo;
}
```

## 2. Argumentos

Son los valores que van a tomar cada uno de los parámetros que se han definido en las funciones.

**Ejemplos:**

Llamando a la funcion sumar() y otorgar los argumentos correspondientes.

```python
# En Python.
resultado_suma = sumar(3, 4)
print(resultado_suma)
```

```java
// En Java.
public void usoFuncionSumar() {
    Integer resultado = sumar(3, 4);
    System.out.println(resultado);
}
```

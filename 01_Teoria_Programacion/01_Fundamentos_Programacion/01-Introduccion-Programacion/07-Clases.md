# Clases

En programación, una `clase` es un tipo de objeto que tiene atributos y métodos, o dicho de otra forma, datos y funciones que representa conceptos de la vida real.

Las `clases` son las plantillas para crear los objetos y una vez creada, los objetos que se crean a partir de estas son llamadas `instancias`.

**Ejemplo:**

Declarando una clase en Java.
```java
public class Lenguaje {
    String nombre;
    Integer anio;

    // Constructor vacío
    public Lenguaje() {}

    // Constructor con parámetros
    public Lenguaje(String nombre, Integer anio) {
        this.nombre = nombre;
        this.anio = anio;
    }

    // Función dentro de una clase
    public void descripcion() {
        System.out.println(this.nombre + " fue creado en " + this.anio);
    }
}
```

Instancia de una clase

```java
public class Instancia {
    Lenguaje html = new Lenguaje("HTML", 1993);
    html.descripcion();
}
```

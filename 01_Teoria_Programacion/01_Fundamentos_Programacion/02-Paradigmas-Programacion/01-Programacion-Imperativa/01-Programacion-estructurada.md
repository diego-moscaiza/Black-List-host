# 1. Programación estructurada

La programación estructurada es un paradigma de programación que hace hincapié en el uso de construcciones de flujo de control estructurado, como secuencias, selecciones e iteraciones, para que el programa sea más legible, fácil de mantener y eficiente.

**Ejemplo:**

```java
public class EjemploEstructural {
    int num = 10;
    int resultado = 0;

    if (num > 0) {
        resultado = num * num;
    } else {
        resultado = num / num;
    }

    System.out.println("Resultado: " + resultado);
}
```
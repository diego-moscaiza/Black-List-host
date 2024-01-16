# 2. Programación prodecimental

La programación procedimental o procedural es un paradigma de programación que organiza el código en procedimientos, que son una secuencia de pasos computacionales a realizar. Los procedimientos suelen organizarse jerárquicamente y pueden invocarse desde otros procedimientos.

**Ejemplo:**

```java
public class EjemploProcedimental {
    int num = 10;

    public int calcularCuadrado(int num) {
        return num * num;
    }

    public double calcularRecíproco(int num) {
        return 1.0 / num;
    }
    
    System.out.println("Cuadrado: " + calcularCuadrado(num));
    System.out.println("Recíproco: " + calcularRecíproco(num));
}
```
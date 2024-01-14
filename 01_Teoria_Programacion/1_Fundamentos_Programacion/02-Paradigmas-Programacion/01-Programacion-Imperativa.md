# Programación imperativa:

Se definen las instrucciones paso a paso redactadas para el usuario. Describen de forma explícita qué pasos deben llevarse a cabo y en qué secuencia para alcanzar finalmente la solución deseada. Tambien se utilizan métodos o funcoines que alteran el estado de un programa.

Dentro de este se encuentras otros tipos de paradigmas como:

1. Programación estructurada o secuencial
2. Programación orientada a objetos (POO)

## 1. Programación estructurada o secuencial

Este es el primer paradigma de programación que normalmente se aprende y se caracteriza porque el codigo es escrito de arriba hacia abajo.

**Ejemplo:**

```java
// Ejemplo:
void saludar() {
	return ("hola mundo")
}

System.out.println(saludar)
```

## 2. Programación orientada a objetos

Este paradigma parte del concepto de "objetos" como base, los cuales contienen información en forma de campos (atributos) y código en forma de métodos.

Las "clases" son las plantillas para crear los "objetos" y cada uno de estos es una instancia de su "clase".

**Ejemplo:**

```java
public class Usuario {

	// Un usuario tiene atributos como:
    String id;
	String nombre;
    String apellido;
	Integer edad;
    String cargo;

	// Constructores:

    public Usuario() {}

    public Usuario(String nombreUsuario, String apellidoUsuario, Integer edadUsuario,  String cargo) {
        this.nombre = nombreUsuario;
		this.apellido = apellidoUsuario;
        this.edad = edadUsuario;
		this.cargo = cargo;
    }

	// Y métodos o funciones como:

    public void crearUsuario() {
		// Algoritmo
    }

    public void actualizarInfo() {
		// Algoritmo
    }

	public void modificar() {
		// Algoritmo
    }
}
```

Los temas involucrados con este paradigma son: abstracción, encapsulamiento, polimorfismo y herencia.

1. Abstracción: Es el proceso de definir los atributos y los métodos de una clase después de haber realizado un análisis de la problemática.
2. Encapsulamiento: Protege la información de manipulaciones no autorizadas.
3. Polimorfismo: Es la instaciación de una clase, con el fin de que cada instancia tenga un comportamiento diferente.
4. Herencia: La "clase hijo" heredan atributos y métodos de la "clase padre".

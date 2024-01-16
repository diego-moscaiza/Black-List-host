# 3. Programación orientada a objetos

La programación orientada a objetos o también conocido como POO, parte del concepto de `objetos` como base, los cuales contienen información en forma de atributos y las funcionalidades en forma de métodos.

Las `clases` son las plantillas para crear los objetos y una vez creada, los objetos que se crean a partir de estas son llamadas `instancias`.

Este paradigma tiene como fundamento estos cuatro puntos: abstracción, encapsulamiento, polimorfismo y herencia.

**1. Abstracción:**  Es el proceso de definir los atributos y los métodos de una clase después de haber realizado un análisis de la problemática.
**2. Encapsulamiento:**  Protege la información de manipulaciones no autorizadas.
**3. Polimorfismo:**  Es la instanciación de una clase, con el fin de que cada instancia tenga un comportamiento diferente.
**4. Herencia:** La "clase hijo" heredan atributos y métodos de la "clase padre".

<br>

**Ejemplo:**

Creación de una clase:

```java
public class Empleado {

	// Un empleado tiene atributos como:
    String id;
    String dni;
	String nombre;
    String apellido;
	Integer edad;
    String cargo;

	// Constructores:
    // Estos deben tener el mismo nombre de la clase
    public Empleado() {}

    public Empleado(String dniEmpleado,, String nombreEmpleado, String apellidoEmpleado, Integer edadEmpleado,  String cargoEmpleado) {
        this.dni = dniEmpleado;
        this.nombre = nombreEmpleado;
		this.apellido = apellidoEmpleado;
        this.edad = edadEmpleado;
		this.cargo = cargoEmpleado;
    }

    // Métodos getter y setter:
    public String getDniEmpleado() {
        return dni;
    }

    public void setDniEmpleado(String dniEmpleado) {
        this.dni = dniEmpleado;
    }

    public String getNombreEmpleado() {
        return nombre;
    }

    public void setNombreEmpleado(String nombreEmpleado) {
        this.nombre = nombreEmpleado;
    }

    public String getApellidoEmpleado() {
        return apellido;
    }

    public void setApellidoEmpleado(String apellidoEmpleado) {
        this.apellido = apellidoEmpleado;
    }

    public int getEdadEmpleado() {
        return edad;
    }

    public void setEdadEmpleado(int edadEmpleado) {
        this.edad = edadEmpleado;
    }

    public String getCargoEmpleado() {
        return cargo;
    }

    public void setCargoEmpleado(String cargoEmpleado) {
        this.cargo = cargoEmpleado;
    }
}
```

Instancia de una clase:

```java
public class Instancia {

    Empleado emp1 = new Empleado("12345678", "John", "Doe", 30, "Ingeniero de Software");
    imprimirEmpleadoInfo(emp1);
    
    public void imprimirEmpleadoInfo(Empleado emp) {
        System.out.println("Información del Empleado:");
        System.out.println("DNI: " + emp.getDniEmpleado());
        System.out.println("Nombre: " + emp.getNombreEmpleado());
        System.out.println("Apellido: " + emp.getApellidoEmpleado());
        System.out.println("Edad: " + emp.getEdadEmpleado());
        System.out.println("Cargo: " + emp.getCargoEmpleado());
    }
}
```

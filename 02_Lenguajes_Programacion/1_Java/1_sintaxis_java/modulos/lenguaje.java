// Parar compilar este modulo se debe ejecutar usando el nombre de la clase "javac Lenguaje.java"
public class Lenguaje {
    String nombre;
    Integer anio;

    public Lenguaje() {}

    public Lenguaje(String nombre, Integer anio) {
        this.nombre = nombre;
        this.anio = anio;
    }

    public void descripcion() {
        System.out.println(this.nombre + " fue creado en " + this.anio);
    }
}
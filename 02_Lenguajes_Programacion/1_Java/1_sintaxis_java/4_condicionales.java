/* CONDICIONALES */
package Paquete;


public class JavaApplication2 {


    public static void main(String[] args) {
        condicional1();
        condicional2();
        condicional3();
    } 

    
    public static void condicional1() {
        // - Usando if / else 
        
        boolean autorizado = false;

        if (autorizado) {
            System.out.println("Puedo ingresar!");
        } else {
            System.out.println("No puedo ingresar!");
        }
    } 

    public static void condicional2() {
        // - Usando if / else / else if
        
        int entero = 7;

        if (entero == 99) {
            System.out.println("Es 99");
        } else if (entero == 100) {
            System.out.println("Es 100");
        } else {
            System.out.println("No es 99 ni 100");
        }
    } 

    public static void condicional3() {
        // - Usando switch.

        String color = "verde";

        // Formato actual:
        switch (color) {
            case "verde" -> System.out.println("Exito!");
            case "amarillo" -> System.out.println("Advertencia!");
            default -> System.out.println("Error!");
        }
        
        // Formato antiguo:
        // switch (color) {
        //     case "verde":
        //         System.out.println("Exito!");
        //         break;
        //     case "amarillo":
        //         System.out.println("Advertencia!");
        //         break;
        //     default:
        //         System.out.println("Error!");
        //     break;
        // }
    } 
}



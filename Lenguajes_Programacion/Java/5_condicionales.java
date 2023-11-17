/* CONDICIONALES */

// 1. If / else - else if
boolean autorizado = false;

if (autorizado) {
    System.out.println("Puedo ingresar!");
} else {
    System.out.println("No puedo ingresar!");
}

// - Otro ejemplo:
int entero = 7;

if (entero == 99) {
    System.out.println("Es 99");
} else if (entero == 100) {
    System.out.println("Es 100");
} else {
    System.out.println("No es 99 ni 100");
}


// 2. Switch.

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


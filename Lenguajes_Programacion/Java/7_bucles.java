/* BUCLES */

// 1. Bucle For

ArrayList<String> animales = new ArrayList<String>();

animales.add("perro");
animales.add("gato");
animales.add("tigre");

for (String animal: animales) {
    System.out.println(animal);
}


// - Ejemplo para multiplicar una lista de numeros con for
public static void main(String[] args) {
    ArrayList<Integer> numeros = new ArrayList<Integer>();
    numeros.add(23);
    numeros.add(45);
    numeros.add(16);
    numeros.add(37);
    numeros.add(3);
    numeros.add(99);
    numeros.add(22);
    for (Integer numero: numeros) {
        multiplicar(numero, 2);
    }
}

public static void multiplicar(int primero, int segundo) {
    System.out.println(primero * segundo);
}


// 2. Bucle While

int entero = 100;
int emergencia = 911;

while (entero <= emergencia) {
    System.out.println(entero);
    entero++;
}




















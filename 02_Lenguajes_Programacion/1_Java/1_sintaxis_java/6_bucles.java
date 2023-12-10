/* BUCLES */

package Paquete;

import java.util.ArrayList;


public class Main {

    public static void main(String[] args) {
        bucleFor();
        bucleForMultiplicar();
        bucleWhile();
    }
    
    // 1. Bucle For
    public static void bucleFor() {
        ArrayList<String> animales = new ArrayList<String>();

        animales.add("perro");
        animales.add("gato");
        animales.add("tigre");

        for (String animal: animales) {
            System.out.println(animal);
        }
        
        System.out.println("Array completo " + animales);
    }
    
    // - Ejemplo para multiplicar una lista de numeros con for

    public static void multiplicar(int primero, int segundo) {
        System.out.println(primero * segundo);
    }
    
    public static void bucleForMultiplicar() {
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

    
    // 2. Bucle While
    public static void bucleWhile() {
        int entero = 100;
        int emergencia = 911;

        while (entero <= emergencia) {
            System.out.println(entero);
            entero++;
        }
    }
}

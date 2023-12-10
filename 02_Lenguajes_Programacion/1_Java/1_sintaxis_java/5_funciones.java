/* FUNCIONES */
// - Dentro de las clases crean las funciones.

package Paquete;


import java.util.ArrayList;

/**
 *
 * @author Diego Moscaiza
 */

public class Main {

    public static void main(String[] args) {
        usoFuncionSumar();
        usoFuncionMultiplicar();
        usoFuncionQuicksort();
    }
    

    // 1.1 Creamos la funcion de sumar()
    static Integer sumar(Integer primero, Integer segundo) {
        return primero + segundo;
    }
    
    // 1.2 Aqui se implementa la funcion sumar()
    public static void usoFuncionSumar() {
        Integer resultado = sumar(3, 4);
        System.out.println(resultado);
    }
    
    
    // 2.1 Creamos la funcion de multiplicar()
    public static int multiplicar(int primero, int segundo) {
        return primero * segundo;
    }
    
    // 2.2 Aqui se implementa la funcion multiplicar()
    public static void usoFuncionMultiplicar() {
        int resultado = multiplicar(3, 4);
        System.out.println(resultado);
    }
    
    
    // Ejemplo con la funcion quicksort()
    
    // - Creamos la funcion quicksort()
    static ArrayList<Integer> quicksort(ArrayList<Integer> lista) {
        if (lista.size() <= 1) {
            return lista;
        }

        Integer pivote = lista.get(0);
        ArrayList<Integer> izquierda = new ArrayList<Integer>();
        ArrayList<Integer> derecha = new ArrayList<Integer>();
        for (int i = 1; i < lista.size(); i++) {
            if (lista.get(i) < pivote) {
                izquierda.add(lista.get(i));
            } else {
                derecha.add(lista.get(i));
            }
        }

        ArrayList<Integer> primero = quicksort(izquierda);
        ArrayList<Integer> medio = new ArrayList<Integer>();
        medio.add(pivote);
        ArrayList<Integer> segundo = quicksort(derecha);
        
        primero.addAll(medio);
        primero.addAll(segundo);
        return primero;
    }
    
    // - Aqui se implementa la funcion quicksort()
    public static void usoFuncionQuicksort() {
        ArrayList<Integer> numeros = new ArrayList<Integer>();
        numeros.add(23);
        numeros.add(45);
        numeros.add(16);
        numeros.add(37);
        numeros.add(3);
        numeros.add(99);
        numeros.add(22);

        ArrayList<Integer> listaOrdenada = quicksort(numeros);
        System.out.println(listaOrdenada);
    }
}
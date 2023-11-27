/* FUNCIONES */

// Dentro de clas clases crean las funciones.
public class Main{
    public static void main(String[] args) {
        // Aqui se implementa la funcion sumar()
        Integer resultado = sumar(3, 4);
        System.out.println(resultado);
    }
    // Aqui se crea la funcion de sumar()
    static Integer sumar(Integer primero, Integer segundo) {
        return primero + segundo;
    }
}


// Ejemplo implementando funcion multiplicar()
public class Main{
    public static void main(String[] args) {
        int resultado = multiplicar(3, 4);
        System.out.println(resultado);
    }
    public static int multiplicar(int primero, int segundo) {
        return primero * segundo;
    }
}

// Ejemplo con una funcion de tipo "void" que no devulve ningun valor
public class Main{
    public static void main(String[] args) {
        String[] animales = {"perro", "gato", "tigre"};
        imprimirPrimerElemento(animales);
    }
    // void no devuleve ningun valor
    public static void imprimirPrimerElemento(String[] lista) {
        System.out.println(lista[0]);
    }
}

// Ejemplo con la funcion quicksort()

public class Main{
    public static void main(String[] args) {
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
    };
}
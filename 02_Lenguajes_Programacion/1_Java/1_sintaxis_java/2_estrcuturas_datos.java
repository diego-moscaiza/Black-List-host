/* Estructuras de datos */
// - Las estructuras de datos son Objetos.

package Paquete;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;


public class Main {


    public static void main(String[] args) {
        listaEnteros();
        listaCadena();
        listaDatosMixtos();
        HashMap1();
        HashMap2();
        HashMap3();
    } 
    
    
    // 1. Listas (Arrays)
    
    // - Las listas permiten guardar muchos tipos de datos de forma ordenada
    // - Para  crear una lista podemos usar "ArrayList<>" y dento de los símbolos '<>' indicamos el tipo de dato que va a gaurdar la lista.

    public static void listaEnteros() {
        ArrayList<Integer> numbers = new ArrayList<Integer>();

        // - Para llamar a la lista y agregar numero debemos llamarlo:
        numbers.add(1);
        numbers.add(23);
        numbers.add(54);
        
        System.out.println(numbers);
    }
    
    public static void listaCadena() {
        String[] animals = { "dog","cat", "turtle" };
        System.out.println(Arrays.toString(animals)); // Convertimos el arreglo en una cadena
    } 
    
    public static void listaDatosMixtos() {
        List<Object> datosMixtos = new ArrayList<Object>();
        datosMixtos.add("texto");
        datosMixtos.add("32");
        datosMixtos.add(true);
        String[] lista = {" lista dento de otra lista" };
        datosMixtos.add(Arrays.toString(lista));
        
        System.out.println(datosMixtos);
    }
    
    // 2. Mapa o tablas hash (HashMap)

    public static void HashMap1() {
        // Tabla conformadas por clave y valor.
        HashMap<Integer, String> jugadores = new HashMap<Integer, String>();
        jugadores.put(10, "Messi");
        jugadores.put(7, "Cristiano Ronaldo");
        
        System.out.println(jugadores.get(7)); // Salida: Cristiano Ronaldo        
    }
    
    public static void HashMap2() {  
        // - Las claves pueden ser texto.
        HashMap<String, String> paises = new HashMap<>();
        paises.put("EC","Ecuador");
        paises.put("MX","México");
        paises.put("AR","Argentina");
        
        System.out.println(paises.get("EC"));
    }
    
    public static void HashMap3() {  
        // - Podemos colocar listas en los valores.
        HashMap<String, List<String>> emails = new HashMap<>();
        
        // - 'Arrays.asList' convierte un arreglo a tipo "List"
        emails.put("Juan", Arrays.asList("juan@gmail.com"));

        List<String> lista = Arrays.asList("ricado@mail.com", "rick_rol@outlook.com");
        emails.put("Ricardo", lista);
        
        System.out.println(emails);
    }

}
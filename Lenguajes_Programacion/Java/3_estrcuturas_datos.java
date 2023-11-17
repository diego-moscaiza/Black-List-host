/* Estructuras de datos */
// - Las estructuras de datos son Objetos.

// 1. Listas (Arrays)
// - Las listas permiten guardar muchos tipos de datos de forma ordenada
// - Para  crear una lista podemos usar "ArrayList<>" y dento de los símbolos '<>' indicamos el tipo de dato que va a gaurdar la lista.


ArrayList<Integer> numbers = new ArrayList<Integer>();

// - Para llamar a la lista y agregar numero debemos llamarlo:
numbers.add(1);
numbers.add(23);
numbers.add(54);

// - Lista de textos
String[] animals = { "dog","cat", "turtle" };


// - Listas con datos mixtos con el tipo "Object".
List<Object> datosMixtos = new ArrayList<Object>();
datosMixtos.add("texto");
datosMixtos.add("32");
datosMixtos.add(true);
String[] lista = {" lista dento de otra lista" };
datosMixtos.add(lista)

// 2 Mapa o tablas hash (HashMap)

// Tabla conformadas por clave y valor.
HashMap<Integer, String> jugadores = new HashMap<Integer, String>();
jugadores.put(10, "Messi");
jugadores.put(7, "Cristiano Ronaldo");
System.out.println(jugadores.get(7)); // Cristiano Ronaldo

// - Las claves pueden ser texto.
HashMap<String, String> paises = new HashMap<>();
paises.put("EC","Ecuador");
paises.put("MX","México");
paises.put("AR","Argentina");
System.out.println(paises.get("EC"));

// - Podemos colocar listas en los valores.
HashMap<String, List<String>> emails = new HashMap<>();
// Arrays.asList crea una lista del tipo "List"
emails.put("Juan", Arrays.asList("juan@gmail.com"));

List<String> lista = Arrays.asList("ricado@gmail.com", "rick@rol,com");
emails.put("Ricardo", lista);
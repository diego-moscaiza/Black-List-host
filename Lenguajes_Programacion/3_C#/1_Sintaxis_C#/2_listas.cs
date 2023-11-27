/* Listas */

// 1. Arreglo (Array):
int[] numeros = { 23, 45, 16, 37, 3, 99, 22 };
numeros[0];

Console.WriteLine(numeros[0]);

// 2. Lista:

List<Integer> numbers = new List<int>{ 23, 45, 16, 37, 3, 99, 22 };
//Console.WriteLine(numbers[0])
Console.WriteLine(string.Join(", ",numbers));

// - Ejemplo: Arreglo de texto:
String[] animales = { "perro", "gato", "tortuga" };

// - Ejemplo: Arreglo de datos mixtos.
dinamic[] datosMixtos = { "texto", 69, true, lista };


// 3. Diccionarios

// - Ejemplo 1:
Dictionary<int, string> jugadores = new Dictionary<int, string>();
jugadores.Add(10, "Messi");
jugadores.Add(7, "Cristiano Ronaldo");
Console.WriteLine(jugadores[7]);

// - Ejemplo 2:
Dictionary<string, string> paises = new Dictionary<string, string>();
jugadores.Add("PE", "Perú");
jugadores.Add("EC", "Ecuador");
jugadores.Add("EU", "Estados Unidos");
jugadores.Add("ES", "España");

Console.WriteLine(jugadores["PE"]);

// - Ejemplo 3:
Dictionary<string, string[]> emails = new Dictionary<string, string[]>();
String[] emailsDiego = {"diego@email.com"};
emails.Add("Diego", emailsDiego)
String[] emailsJuan = {"juan@email.com", "juan@outlook.com"};
emails.Add("Juan", emailsJuan)
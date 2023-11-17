String libro = "Clean Code";
String telf = "945-654-238";
String morado = "morado";

int entero = 100;
float numDecimal = 1.96548F; // para el decimal se debe poner F al final del decimal.

bool habilitado = true;
bool corregido = false;

const float pi = 3.14159265F;


// Listas

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
Dictionary<int, string> jugadores = new Dictionary<int, string>();
jugadores.Add(10, "Messi");
jugadores.Add(7, "Cristiano Ronaldo");
Console.WriteLine(jugadores[7]);

// - Ejemplo de diccionario con String.
Dictionary<string, string> paises = new Dictionary<string, string>();
jugadores.Add("PE", "Perú");
jugadores.Add("EC", "Ecuador");
jugadores.Add("EU", "Estados Unidos");
jugadores.Add("ES", "España");

Console.WriteLine(jugadores["PE"]);

// - .
Dictionary<string, string[]> emails = new Dictionary<string, string[]>();
String[] emailsDiego = {"diego@email.com"};
emails.Add("Diego", emailsDiego)
String[] emailsJuan = {"juan@email.com", "juan@outlook.com"};
emails.Add("Juan", emailsJuan)


Console.WriteLine(1 + 1);
Console.WriteLine(1 - 1);
Console.WriteLine(1 * 1);
Console.WriteLine(1 / 1);
Console.WriteLine(1 % 1);

Console.WriteLine(1 == "1");
Console.WriteLine(1 == 1);
Console.WriteLine(1 != 1);
Console.WriteLine(1 < 1);
Console.WriteLine(1 > 1);
Console.WriteLine(1 <= 1);
Console.WriteLine(1 >= 1);

Console.WriteLine(true && true);
Console.WriteLine(true && false);
Console.WriteLine(false && true);
Console.WriteLine(false && false);

Console.WriteLine(true || true);
Console.WriteLine(true || false);
Console.WriteLine(false || true);
Console.WriteLine(false || false);

Console.WriteLine(!true);
Console.WriteLine(!false);


// Condicionales

bool autorizado = true;

if (autorizado)
{
    Console.WriteLine("Puedes ingresar");
}
else
{
    Console.WriteLine("No puedes ingresar");
}

// Condicionales

// - If, else - else if.

int entero = 100;

if (entero = 99)
{
    Console.WriteLine("Es 99");
}
else if (entero = 100)
{
    Console.WriteLine("Es 100");
}
else
{
    Console.WriteLine("No es 99 ni 100");
}

// - Switch.

string color = "amarillo";

switch (color)
{
    case "verde":
        Console.WriteLine("Exito");
        break;
    case "amarillo":
        Console.WriteLine("Advertencia");
        break;
    default:
        Console.WriteLine("Error");
        break;
}

// Funciones

int sumar(int primero, int segundo)
{
    return primero + segundo;
}

int resultado = sumar(1, 4);
Console.WriteLine(resultado);

// -

numero1 = 23;

// No retorna ningun valor, ejecuta lo que se ha ingresado.
void multiplicar(int primero, int segundo)
{
    Console.WriteLine(primero + segundo);
}

multiplicar(numero1, 2)

// -

void PrintFirstElement(string[] lista)
{
    Console.WriteLine(lista[0]);
}

PrintFirstElement(animales)

// -

List<int> quicksort(List<int> lista)
{
    if (lista.Count <= 1)
    {
        return lista;
    }

    int pivote = lista[0];
    List<int> izquierda = new List<int>();
    List<int> derecha = new List<int>();

    int i = 1;
    for (i; i < lista.Count; i++)
    {
        if (lista[i] < pivote) {
            izquierda.Add(lista[i]);
        }
        else
        {
            derecha.Add(lista[i]);
        }
    }

    List<int> primero = quicksort(izquierda);
    List<int> medio = new List<int> { pivote };
    List<int> segundo = quicksort(derecha);

    primero.AddRange(medio);
    primero.AddRange(segundo);
    return primero;
}

List<int> numeros2 = new List<int> { 23, 45, 16, 37, 3, 99,22 };
List<int> listaOrdenada = quicksort(numeros2);
Console.WriteLine(string.Join(", ", listaOrdenada));

// - Bucles:

string[] animales = { "perro", "gato", "tigre" };

foreach (string animal in animales)
{
    Console.WriteLine(animal)
}

// -.

void multiplicar(int primero, int segundo)
{
    Console.WriteLine(primero * segundo);
}

int[] listaNumeros =  { 23, 45, 16, 37, 3, 99,22 };

foreach (int numero in listaNumeros)
{
    multiplicar(numero, 2)
}

// -

int enetero1 = 100;
int emergencia = 911;

while (enetero1 <= emergencia)
{
    Console.WriteLine(enetero1);
    entero1++;
}
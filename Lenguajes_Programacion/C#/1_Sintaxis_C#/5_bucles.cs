/* Bucles */

// 1. Foreach

// - Ejemplo 1:
string[] animales = { "perro", "gato", "tigre" };

foreach (string animal in animales)
{
    Console.WriteLine(animal)
}

// - Ejemplo 2:

void multiplicar(int primero, int segundo)
{
    Console.WriteLine(primero * segundo);
}

int[] listaNumeros =  { 23, 45, 16, 37, 3, 99,22 };

foreach (int numero in listaNumeros)
{
    multiplicar(numero, 2)
}

// 2. While

int enetero1 = 100;
int emergencia = 911;

while (enetero1 <= emergencia)
{
    Console.WriteLine(enetero1);
    entero1++;
}
/* Condicionales */

// 1. If, else - else if.

// - Ejemplo 1:
bool autorizado = true;

if (autorizado)
{
    Console.WriteLine("Puedes ingresar");
}
else
{
    Console.WriteLine("No puedes ingresar");
}

// - Ejemplo 2:

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

// 2. Switch.

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
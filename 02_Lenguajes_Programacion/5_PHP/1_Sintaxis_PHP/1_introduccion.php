<?php

// Comentatio -> Imprimir un hola mundo.
// - Usamos el salto de linea '\n' para que la siguiente impresión no se junte con esta.
echo "Hola, PHP\n";

// NOTA: Aparte del  clásico 'echo' existen otras palabras para imprimir en PHP

// Variables

// - Variable Tipo Cadena (String)
$my_string = "Esto es una cadena de texto\n";
$my_string = "Aqui cambio el valor de la cadena de texto."; // Cambia el valor de la variable

echo $my_string . "\n";
echo gettype($my_string) . "\n"; // Type string

$my_string = 6; // Vuelve a cambiar el valor de la variable y además el tipo de variable a entero
echo $my_string . "\n"; // 6

$my_string = "Aqui cambio el valor de la cadena de texto.";

// - Variable Tipo Entero (Integer)
$my_int = 7;

$my_int = $my_int + 4;
echo $my_int . "\n"; // 11
echo $my_int - 1 . "\n"; // 10
echo $my_int . "\n"; // Sq queda en '11' porque ha sido utilizado en una variable con el mismo nombre pero inicialmente vale '7'
echo gettype($my_int) . "\n"; // Type integer

// - Variable Tipo Decimal (Double)
$my_double = 6.5;
echo gettype($my_double) . "\n"; // Type double
echo $my_int + $my_double + $my_string . "\n"; // Error

// Variable Tipo Buleano (Boolean)

$my_boolean = true;
echo $my_boolean . "\n"; // true
$my_boolean = false;
echo $my_boolean . "\n"; // '' <- imprimer vacio, pero si le pasamos '=== 0' representa 1. Osea la variable buleana no cambia de valor en la reasignación.

echo gettype($my_boolean); // Type Boolean

// Constantes. Usamos el UPPER_SNAKE_CASE para declarar los nombres de las constantes.
const MY_CONSTANT = "Valor de la constante";
echo MY_CONSTANT . "\n";

// Interpolacion
echo "El valor de mi entero es $my_int y el de mi boolean es $my_boolean.\n";


// php.net/manual/es
// learn-php.org
?>
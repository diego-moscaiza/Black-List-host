<?php
/* Listas */

// Arreglos (Arrays). 
// - El Arreglo es el tipo fundamental y de ahi parte las listas que son mas potentes
$my_array = [$my_string, $my_int, $my_double];
echo gettype($my_array) . "\n"; // Array
echo $my_array[0] . "\n";
// echo $my_array[3] . "\n";

array_push($my_array, $my_boolean);
print_r($my_array); // Imprime el contenido de arreglo con sus indices.
echo $my_array[4] . "\n"; // Error por que no hay nada en la posicion 4.


// Diccionario. Tiene la estructura 'clave' => 'valor'

$my_dict = array("string" => $my_string, "int" => $my_int, "bool" => $my_boolean);
echo gettype($my_dict) . "\n";  // Array 😑
print_r($my_dict); // Imprime el contenido de diccionario.
echo $my_dict["int"] . "\n"; // Imprime el valor de la clave 'int'.

// Métodos en arreglos.

// 1.'array_push()'. Permite ingresar valores en un arreglo
array_push($my_array, "Brais");
array_push($my_array, "Brais");
print_r($my_array); // Imprime el contenido del arreglo con sus indices.

// 2. 'array_unique()'. No admite valores repetidos en un arreglo
print_r(array_unique($my_array)); //



// php.net/manual/es
// learn-php.org
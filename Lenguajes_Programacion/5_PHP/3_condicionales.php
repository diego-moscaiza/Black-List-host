<?php
// Condicionales

// - If, else - elseif

$my_int = 13;
$my_string = "Hola";

if ($my_int == 11 && $my_string == "Hola") {
    echo "El valor es 11\n";
} elseif ($my_int == 12 || $my_string == "Hola")  {
    echo "El valor NO es 12\n";
} else {
    echo "El valor NO es 11\n";
}

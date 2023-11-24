<?php
// Clases
class MyClass {
    public $name;
    public $age;

    function __constructor($name, $age) {
        $this->name = $name;
        $this->age = $age;
    }
}

$my_class = new MyClass("Diego", 23); // Definimos una variable para crear una instancia de una clase.
print_r($my_class); // Imprime la estructura de la clase
echo $my_class->name . "\n"; // "Diego"

$my_class->name = "Brais"; // Se cambia el valor de la variables
echo $my_class->name . "\n"; // Imprime el valor cambiado
echo gettype($my_class) . "\n"; // Type Object
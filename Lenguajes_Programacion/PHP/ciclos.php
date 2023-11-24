<?php

// Ciclos (Bucles)

// - For
for ($index = 0; $index <= 10; $index++) {
    echo $index . "\n";
}

// - Foreach
foreach ($my_array as $my_item) {
    echo $my_item . "\n";
}

// - While

$index = 0;
while ($index <= sizeof($my_array) - 1) {
    echo $my_array[$index] . "\n";
    $index++;
}
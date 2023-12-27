#include <stdio.h>

// Estatico (Static): La palabra clave estática en C se usa para crear variables y funciones que tienen un alcance global, pero que solo son visibles dentro del archivo donde se crean. 

static int count = 0;

void increaseCount() {
    count++;
}

int main() {
    increaseCount();
    printf("Count: %d\n", count);

    return 0;
}
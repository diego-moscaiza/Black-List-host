#include <stdio.h>

// definición de tipo (Type Definition): La palabra clave typedef en C se utiliza para crear un alias o un nuevo nombre para un tipo de datos existente. 

typedef int Age;

int main() {
    Age age = 25;
    printf("Age: %d\n", age);

    return 0;
}
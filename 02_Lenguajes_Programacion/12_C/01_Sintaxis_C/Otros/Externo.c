#include <stdio.h>

// Externo (Extern): La palabra clave extern en C se usa para indicarle al compilador que una variable está definida en otro archivo. 

extern int count;

int main() {
    count++;
    printf("Count: %d\n", count);

    return 0;
}
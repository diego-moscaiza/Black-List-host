#include <stdio.h>

// Una enumeración (enum) en C es una colección de constantes enteras que se nombran explícitamente. 

enum Season {
    SPRING,
    SUMMER,
    AUTUMN,
    WINTER
};

int main() {
    enum Season season = SPRING;
    printf("Season: %d\n", season);

    return 0;
}
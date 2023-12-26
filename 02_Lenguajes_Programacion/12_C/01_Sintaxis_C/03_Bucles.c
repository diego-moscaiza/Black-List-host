#include <stdio.h>

int main() {
    int i;

    // for loop
    for (i = 0; i < 5; i++) {
        printf("Iteration: %d\n", i);
    }

    // while loop
    i = 0;
    while (i < 5) {
        printf("Iteration: %d\n", i);
        i++;
    }

    // do-while loop
    i = 0;
    do {
        printf("Iteration: %d\n", i);
        i++;
    } while (i < 5);

    return 0;
}
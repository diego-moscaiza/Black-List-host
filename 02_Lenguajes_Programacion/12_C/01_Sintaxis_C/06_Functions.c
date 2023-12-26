#include <stdio.h>

// function declaration
int add(int a, int b);

int main() {
    int num1 = 10;
    int num2 = 20;
    int sum;

    // function call
    sum = add(num1, num2);

    printf("Sum: %d\n", sum);

    return 0;
}

// function definition
int add
#include <stdio.h>

int main() {
    int a = 10;
    int b = 20;

    // logical operators
    printf("OR: %d\n", a || b);
    printf("AND: %d\n", a && b);
    printf("NOT: %d\n", !a);

    // comparative operators
    printf("Equal: %d\n", a == b);
    printf("Not Equal: %d\n", a != b);
    printf("Greater Than: %d\n", a > b);
    printf("Less Than: %d\n", a < b);
    printf("Greater Than or Equal: %d\n", a >= b);
    printf("Less Than or Equal: %d\n", a <= b);

    // arithmetic operators
    printf("Addition: %d\n", a + b);
    printf("Subtraction: %d\n", a - b);
    printf("Multiplication: %d\n", a * b);
    printf("Division: %d\n", a / b);
    printf("Modulus: %d\n", a % b);

    return 0;
}
#include <stdio.h>

int main() {
    int a = 10; // integer
    float b = 12.3; // float
    double c = 12.3456789; // double
    char d = 'A'; // character
    char str[] = "Hello World!"; // string

    const int NUMBER_OF_MONTHS = 12;
    const float PI = 3.14159265358979323846;

    printf("Integer: %d\n", a);
    printf("Float: %f\n", b);
    printf("Double: %lf\n", c);
    printf("Character: %c\n", d);
    printf("String: %s\n", str);
    printf("There are %d months in a year.\n", NUMBER_OF_MONTHS);
    printf("The value of PI is %.10f.\n", PI);

    return 0;
}
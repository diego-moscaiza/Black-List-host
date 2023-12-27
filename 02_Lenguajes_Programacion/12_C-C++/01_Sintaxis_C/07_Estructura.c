#include <stdio.h>

// Una estructura en C es una colección de variables, posiblemente de diferentes tipos, bajo un mismo nombre.

struct Student {
    int id;
    char name[50];
    float marks;
};

int main() {
    struct Student student1;
    student1.id = 1;
    strcpy(student1.name, "John Doe");
    student1.marks = 85.5;

    printf("ID: %d\n", student1.id);
    printf("Name: %s\n", student1.name);
    printf("Marks: %.2f\n", student1.marks);

    return 0;
}
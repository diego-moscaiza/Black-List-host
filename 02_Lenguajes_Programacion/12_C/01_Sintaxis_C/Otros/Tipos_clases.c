#include <stdio.h>

// Tipos de clases (Class Types): En C, los tipos de clases no se admiten directamente, pero se pueden implementar mediante estructuras y punteros de función. 

typedef struct {
    int id;
    char name[50];
    void (*display)();
} Student;

void displayStudent(Student *student) {
    printf("ID: %d\n", student->id);
    printf("Name: %s\n", student->name);
}

int main() {
    Student student1;
    student1.id = 1;
    strcpy(student1.name, "John Doe");
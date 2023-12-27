#include <iostream>

// Function definition
void print_addition_result(int a, int b) {
    std::cout << "The sum of " << a << " and " << b << " is " << add(a, b) << std::endl;
}

// Function definition with return type
int add(int a, int b) {
    return a + b;
}


int main() {
    print_addition_result(3, 4); // prints: "The sum of 3 and 4 is 7"
    return 0;
}
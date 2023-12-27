#include <iostream>

int main() {

    int a = 10;
    int b = 20;

    bool a = true;
    bool b = false;

    // Operadores Logicos
    std::cout << "a AND b: " << (a && b) << std::endl;
    std::cout << "a OR b: " << (a || b) << std::endl;
    std::cout << "NOT a: " << (!a) << std::endl;

    // Operadores Comparativos
    std::cout << "a == b: " << (a == b) << std::endl;
    std::cout << "a != b: " << (a != b) << std::endl;
    std::cout << "a > b: " << (a > b) << std::endl;
    std::cout << "a < b: " << (a < b) << std::endl;
    std::cout << "a >= b: " << (a >= b) << std::endl;
    std::cout << "a <= b: " << (a <= b) << std::endl;

    // Operadores Aritméticos
    std::cout << "a + b: " << (a + b) << std::endl;
    std::cout << "a - b: " << (a - b) << std::endl;
    std::cout << "a * b: " << (a * b) << std::endl;
    std::cout << "a / b: " << (a / b) << std::endl;
    std::cout << "a % b: " << (a % b) << std::endl;

    return 0;

}

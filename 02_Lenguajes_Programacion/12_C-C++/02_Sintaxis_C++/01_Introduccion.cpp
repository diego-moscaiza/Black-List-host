#include <iostream>

int main() {
    int a = 10; // integer
    double b = 10.5; // double precision floating point
    float c = 10.2f; // single precision floating point
    char d = 'A'; // character
    bool e = true; // boolean

    const int MY_CONSTANT = 42; // constant integer type
    const std::string MY_STRING = "Hello, world!"; // constant string type

    // Prints

    std::cout << "Integer: " << a << std::endl;
    std::cout << "Double: " << b << std::endl;
    std::cout << "Float: " << c << std::endl;
    std::cout << "Character: " << d << std::endl;
    std::cout << "Boolean: " << e << std::endl;

    cout << "Constant integer type: " << MY_CONSTANT;
    cout << "Constant string type: " << MY_STRING;

    return 0;

}

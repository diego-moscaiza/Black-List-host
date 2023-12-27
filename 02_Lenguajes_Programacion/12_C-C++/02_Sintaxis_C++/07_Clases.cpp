#include <iostream>

class Animal {
public:
    Animal(std::string name) : name(name) {}

    void speak() {
        std::cout << "Hello, my name is " << name << std::endl;
    }

private:
    std::string name;
};

int main() {
    Animal cat("Fluffy");
    cat.speak(); // prints: "Hello, my name is Fluffy"
    return 0;
}
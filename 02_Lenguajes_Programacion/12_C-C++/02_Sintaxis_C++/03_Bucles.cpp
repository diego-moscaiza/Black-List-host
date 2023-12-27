#include <iostream>

int main() {
    for (int i = 0; i < 10; i++) {
        std::cout << "Iteration: " << i << std::endl;
    }

    int j = 0;
    while (j < 10) {
        std::cout << "While Iteration: " << j << std::endl;
        j++;
    }

    do {
        std::cout << "Do-While Iteration: " << j << std::endl;
        j++;
    } while (j < 20);

    return 0;
}
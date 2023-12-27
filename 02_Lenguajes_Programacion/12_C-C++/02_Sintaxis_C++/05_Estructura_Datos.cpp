#include <iostream>

void arrays() {
    int numbers[5] = {1, 2, 3, 4, 5};
    int my_array_2[] = {10, 20, 30};

    // Accessing elements
    std::cout << numbers[0] << std::endl; // prints: 1

    for (int i = 0; i < 5; i++) {
        std::cout << "numbers[" << i << "]: " << numbers[i] << std::endl;
    }
}

void list() {
    std::list<int> my_list;
    my_list.push_back(1);
    my_list.push_back(2);
    my_list.push_back(3);

    // Accessing elements
    std::cout << my_list.front() << std::endl; // prints: 1
}

void hash_map() {
    std::unordered_map<std::string, int> my_hash_map;
    my_hash_map["one"] = 1;
    my_hash_map["two"] = 2;
    my_hash_map["three"] = 3;

    // Accessing elements
    std::cout << my_hash_map["one"] << std::endl; // prints: 1
}


int main() {

    return 0;
}

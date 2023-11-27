package main

import ("fmt")


func main() {

	// Bucles

	for i := 0; i < len(myArray); i++ {
		fmt.Println(myArray[index])
	} // 1 \n 2 \n 3

	for index, value := range myMap {
		fmt.Println(index, value)
	}
	
}
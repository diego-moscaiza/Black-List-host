package main

import ("fmt")


func main() {

	// Arreglos (Array)
	
	//var myArray [3]int = [1; 2; 3]
	var myArray [3]int
	// myArray[0] = 1
	// fmt.Println(myArray) // [1 0 0]

	myArray[0] = 1
	myArray[1] = 2
	myArray[2] = 3
	//myArray[3] = 3 // Error, se está ingresando datos fuera de la posicion definida
	fmt.Println(myArray) // [1 2 3]
	fmt.Println(myArray[2]) // 3

	// var myArray2 [3]string
	// fmt.Println(myArray2) // [  ]

	var myArray2 [3]float64
	fmt.Println(myArray2) // [0 0 0]

	// Mapa (Map)

	// - Ejemplo 1:
	myMap := make(map[string]int)
	myMap["Brais"] = 36
	myMap["Diego"] = 23
	myMap["Gabriel"] = 41
	fmt.Println(myMap["Diego"]) // Output: 36

	// - Ejemplo 2:
	myMap1 := map[string]int{ "Brais": 36, "Diego": 23, "Gabriel": 41 }
	fmt.Println(myMap1)
	fmt.Println(myMap1["Diego"])  // Output: 36

	// Lista (List)
	myList := list.New()
	myList.pushBack(1)
	myList.pushBack(2)
	myList.pushBack(3)
	// fmt.Println(myList[1]) // Error
	fmt.Println(myList.Back().Value) // 3
	
}
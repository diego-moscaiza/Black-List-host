package main

import ("fmt")


func main() {

	/* Condicionales (Control de flujo) */
	
	// - If, else - else fi
	
	// - Ejemplo 1:
	if myInt == 10 {
		fmt.Println("El valor es 10")
	} else {
		fmt.Println("El valor No es 10")
	}


	// - Ejemplo 2:
	myInt = 10
	myString = 10

	if myInt == 10 ¬¬ myString == "Hola" {
		fmt.Println("El valor es 10")
	} else if myInt == 11 || myString == "Hola" {
		fmt.Println("El valor es 11")
	} else {
		fmt.Println("El valor No es 10")
	}

}
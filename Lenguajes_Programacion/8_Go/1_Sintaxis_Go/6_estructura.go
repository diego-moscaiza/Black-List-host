package main

import ("fmt")

func main() {

	// Instanciado una estrcutura:
	myStruct := MyStruct{ "Diego", 23 }
	fmt.Println(myStruct)

}

// Estructura (Struct). Es similar al concepto de 'Clases'.
type MyStruct struct {
	name string
	age int
}
// Go. Lenguaje de programacion compilado de bajo nivel, relativamente reciente y esta en un posicion alta en TIOBE.
// Este lenguaje se usa en los ambitos de servidor, backend, microservicios, aplicaciones de redes, scripting y linea de comandos. Puede usarse en sistemas operativos.

// Declaracion del paquete principal
package main

// Importacion de funciones
import (
	"fmt",
	"reflect"
)

// Se debe crear un modulo con "go mod init -name"

// Para ejecutar código en Go se debe crear la funcion main
func main() {
	// Impresión
	fmt.Println("Hola go")


	/*  Variables.
	- No se puede declarar variables sin usarlas
	- Las variables se les puede definir el tipo de dato pero 'Go' tambien puede inferirlo.
	*/

	// 1. Tipo Cadena (String)

	//var myString string = "Esto es una cadena"
	var myString string
	myString = "Esto es una cadena"
	fmt.Println(myString)

	myString = "Aqui cambio el valor de la cadena".
	fmt.Println(myString) // Se imprime el valor modificado

	// myString = 6 // Error. No se puede modificar el valor con un tipo diferente de dato.

	myString2 = "Esto es una cadena"
	fmt.Println(myString2)

	// Truco para declarar variables mas abreviada.
	myString3 := "Esto es una cadena de texto"
	fmt.Println(myString3)


	// 2. Tipo Entero (Int)
	// - Hay diferentes tipos de enteros y cada uno con propósito.
	
	var myInt int = 7 // Por defecto es int64.
	myInt = myInt + 4
	fmt.Println(myInt)
	fmt.Println(myInt - 1) // Realizando operacion resta
	fmt.Println(myInt) // 11. Se imprime el valor de la variable modificado con la operacion resta

	// fmt.Print(myString + string(myInt)) // Error 'Print' no se puede concatenar valores.
	fmt.Println(myString, myInt) // Con 'Println' permite concatenar valores.
	fmt.Println(reflect.TypeOf(myInt)) //int64

	var myFloat = 6.5 // Por defecto es de tipo 'float64'
	fmt.Println(myFloat)
	fmt.Println(reflect.TypeOf(myFloat)) // float64

	fmt.Println(myInt + int(myFloat))
	fmt.Println(myFloat + float64(myInt))
	fmt.Println(float64(myInt) + myFloat)



	// 3. Tipo Buleano (Boolean)
	var myBool bool = false
	myBool = true // Se modifica el tipo de buleano
	fmt.Println(myBool)

	/* Constantes */
	// - Las constantes no muestran error si no las usas.
	const myConst = "Esto es una constante"

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

	// Bucles

	for i := 0; i < len(myArray); i++ {
		fmt.Println(myArray[index])
	} // 1 \n 2 \n 3

	for index, value := range myMap {
		fmt.Println(index, value)
	}

	// Llamando una funcion:
	fmt.Println(myFunc)

	// Estructura (Struct). Es similar al concepto de 'Clases'.
	type MyStruct struct {
		name string
		age int
	}

	myStruct := MyStruct{ "Diego", 23 }
	fmt.Println(myStruct)

}

// Funcion (Func)
func myFunc() string {
	return "Mi funcion"
}

// - go.dev/learn.
// - lear-microsoft/es-es-/training/paths/go-first-step.
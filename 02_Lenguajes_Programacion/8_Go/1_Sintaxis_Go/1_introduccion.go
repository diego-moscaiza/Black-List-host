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

}

// - go.dev/learn.
// - lear-microsoft/es-es-/training/paths/go-first-step.
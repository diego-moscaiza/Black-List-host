// Lenguaje Swift

// - Creado en Junio de 2014 por Apple. Soporta multiples paradigmas, orientada a protocolos, orientado a objetos, funcional, imperativo, estructura de bloque, declarativo y concurrente.
// - Sirve para la creacion de aplicaciones en MacOs, iOS, iPad y los demás dispositivos de la marca Apple.


//import UIKit // Para interfaces gráficas
import Foundation // núcleo del lenguaje Swift

print("Hola mundo en swift")


// Variables. Se puede declarar el tipo de dato pero el lenguaje puede inferirlo.

// Tipo Cadena (String)

var myString = "Esto es una cadena de texto"
myString = "Cambiando valor de la cadena"
// myString = 6 // Error

print(myString)

var myString2:String = "Otra cadena de texto"
print(myString2)

// Tipo Entero (Int)

var myInt = 6
myInt + 4
print(myInt) // 10
print(myInt - 1) // 11

var myInt2: Int = 5
print(myInt2)

// Tipo Decimal (Double, Float se debe definir, etc)

var myDouble = 6.5
print(myInt2)

var myFloat: Float = 8.3
print(myFloat)

// Tipo Buleano (Boolean)

var myBool = false
myBool = true // Se cambia el tipo de buleano
print(myBool)

// Constantes

let myConst = "Valor constante"
// myConst = "Modificando constante" // Error
print(myConst)

import Foundation

// Listas

var myList = ["Diego", "Benjamin", "@mail.com", "Diego"] // No se puede añadir valores de otros tipos una vez ingresado un valor con un tipo de dato en concreto
print(myList)
print(myList[0])
myList.append("35")
print(myList)

// Sets. Impide mostrar duplicados y los muestra de forma desordenada.

var mySet: Set =  ["Diego", "Benjamin", "@mail.com", "Diego"]
print(mySet)

// Mapas (Maps). Clave - valor

var myMap = ["Diego" : 23, "Jose" : 14]
print(myMap)
// print(myMap["Brais"]) // Error
print(myMap["Diego"])

if let age = myMap["Brais"] {
    print(age)
} else {
    print("No existe esta clave")
}

// Con el operador '??' realizamos algo similar al if else
print(myMap["Brais"] ?? "No existe esta clave.")


// Opcionales. Una variable que tenga el tipo de operador con un simbolo de pregunta '?' significa que es un valor que puede ser nulo, pero seria mejor controlarlo uno mismo.

var myOptional: String? = "Mi valor opcional"
myOptional = nil // Definiendo el valor como nulo
// print(myOptional!) // Error. // Desempaquetado de nulos: Con el simbolo '!' al final definimos que el valor no es nulo

if myOptional != nil {
    print(myOptional!) // Muestra una advertencia
}


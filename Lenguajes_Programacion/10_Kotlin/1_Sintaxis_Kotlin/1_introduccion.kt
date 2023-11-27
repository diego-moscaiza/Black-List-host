// Lenguaje Kotlin
// Fue creado en la empresa Jetbrains
// - Es fuertemente tipado, pero puede inferir el dato

package 1_Sintaxis_Kotlin

fun main() {

    /* 
    * Comentario.
    */

    // Hola mundo
    println("Hola mundo")

    // - Variables

    // 1. Variable de tipo cadena (String)

    var myString = "Cadena de texto"
    myString = "Cambiando el valor de un texto"
    // myString = 6 // Error No se puede cambiar el valor que sea de otro tipo de dato que no sea el asignado.
    println(myString)

    var myString2: String = "Esta es otra cadena de texto"
    println(myString2)

    // 2. Variable de tipo entero (Int, etc)

    var myInt = 7
    myInt = myInt + 4
    println(myInt) // 11
    println(myInt - 1)
    println(myInt) // 10

    var myInt2 : Int = 5
    println(myInt2)

    // 3. Variable de tipo decimal (Double, Float)

    var myDouble = 6.5
    println(myDouble)
    myDouble = 6.0
    println(myDouble) // 6.0. Se ha cambiado el valor

    var myDouble2: Double = 7.5
    var myFloat: Float = 8.0f 

    // 4. Variable de tipo buleano (True - False)

    var myBool = false
    myBool = true
    println(myBool)

    // - Opcionales

    var myOptional: String? = null // Declaramos la variable como un posible 'String' pero al principio se le asigna 'null'.
    println(myOptional) // null
    myOptional = "Mi cadena de texto"
    println(myOptional) // Imprime el valor añadido

    // - Esto es propio de kotlin
    myOptional?.let {

    }


    // - Constantes. Se usa la palabra reservada 'val' para constantes.

    val myConst = "Una constante de tipo cadena"
    // myConst = "Tratando de cambiar valor del constante" // Error.


    // - Interpolacion
    println("Este es el valor de la variable myString: " + myString)

    println("Este es el valor de la variable myInt: " $myInt)


    // - Documentacion:
    // kotlinlang.org/docs/home.html
    // developer.android.com/kotlin
    // jetbrains.com/pages/academy/kotlin

}
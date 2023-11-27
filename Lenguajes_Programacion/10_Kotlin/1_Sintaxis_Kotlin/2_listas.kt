package 1_Sintaxis_Kotlin

fun main() {
    // Listas


    // Lista inmutable
    var myList = listOf("Brais", "Diego", "@mail.com")
    println(myList[1])
    println(myList)

    // Lista mutable
    var myList2 = mutableListOf("Brais", "Diego", "@mail.com")
    println(myList2[1])
    myList2.add("Juan")
    println(myList2)

    // Sets. Impide mostrar duplicados y los muestra o guarda de forma desordenada.

    val mySet = setOf("Brais", "Diego", "@mail.com", "Diego")
    println(mySet) // ["Brais", "Diego", "@mail.com"]

    val mySet2 = setOf(1, 3, 45)
    println(mySet2)

    // Mapas

    val myMap = mutableMapOf("Juan" to 36, "Diego" to 23)
    // myMap.put("Esteban", 17)
    myMap["Esteban"] = 17
    println(myMap["Juan"])

}
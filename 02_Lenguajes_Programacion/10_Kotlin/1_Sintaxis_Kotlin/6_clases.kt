package 1_Sintaxis_Kotlin

fun main() {

    var myClass = MyClass("Diego", 23)
    println(myClass.age)
    myClass.imprimir()
}

// class MyClass(val name: String, val age: Int) // Otra alternativa


class MyClass(val name: String, val age: Int) {
    fun imprimir() {
        println("Mostrando texto")
    }
}
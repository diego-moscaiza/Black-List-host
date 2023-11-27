package 1_Sintaxis_Kotlin

import 1_Sintaxis_Kotlin.3_condicinoales.main

fun main() {

    // - Bucles

    // 1. for

    for (value in myList) {
        println(value)
    }

    for (value in mySet) {
        println(value)
    }

    for (value in myMap) {
        println(value)
    }

    // 2. while

    var myCounter = 0

    while (myCounter < myList.count()) {
        println(myList[myCounter])
        myCounter += 1
    }

}
// ---> BUCLES //

let lista2 = [1,2,3,4,5,6]
let entero = 100
let emergencia = 911

// De la lista anterior ahora se jará un recorrido y se sumará cada valor definiendo el valor a sumar
for (elemento of lista2) {
    let suma = sumar(elemento, 5)
    console.log(suma) // se imprimira el resultado de cada suma
}

while (entero <= emergencia) {
    console.log(entero)
    entero++
}

// while (true) {console.log(i++)} ->con esto se imprimirá de uno en adelante sin parar.
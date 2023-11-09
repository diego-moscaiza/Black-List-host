// FUNCIONES //
function suma(a, b) { return a + b } // esta es una funcion de suma
suma(1, 3)

// Ejemplo: Función quicksort
function quicksort(lista) {
    if (lista.length <= 1) {
        return lista
    }

    let pivote = lista[0]
    let izquierda = []
    let derecha = []

    for (let i = 1; i < lista.length; i++) {
        lista[i] < pivote ? izquierda.push(lista[i]) : derecha.push
            (lista[i])
    }
    return quicksort(izquierda).concat(pivote, quicksort(derecha))
}

let numeros = [23, 45, 67, 12, 4, 17, 11]
let listaOrdenada = quicksort(numeros)
console.log(listaOrdenada)
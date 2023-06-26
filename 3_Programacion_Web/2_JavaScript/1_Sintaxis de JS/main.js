//INTRODUCCION A JAVASCRIPT


//MOSTRAR MENSAJE

console.log('Hola mundo')


// TIPOS DE DATOS (primitivos)

let string = 'TEXTO'
let number = 1232
let bool_true = true
let bool_false = false
let sinDefinir = undefined
let nulo = null

// Renderización de datos

document.write('texto')

alert(true)

// TIPOS DE DATOS (No primitivos)

let lista = [1, 2, 3, 4, 5, 6]

// Es un objeto con formato de clave : valor
let jugadores = { 
    10: 'Messi',
    7: 'Cristiano Ronaldo'
}

let emails = {
    'Juan': ['juan@gmail.com'],
    'Ricardo': [
        'ricardo@gmail.com',
        'ricardo@hotmail.com'
    ]
}

// VARIABLES

let telefono = '948752900'
alert(telefono)

// CONSTANTES

const pi = 3.14159265359


// OPERADORES ARITMÉTICOS

let sumar  = 1 + 1
let restar = 9 - 3
let dividir = 20 + 4
let multiplicar = 2 * 5

console.log(sumar) // con esto se imprime lo asginado a la variable 'sumar'

// OPERADORES comparativos

console.log(4 == 4)    // Devolvertá TRUE
console.log(0 == '0')  // Devolverá TRUE porque compara solo el valor y no el tipo de dato
console.log(0 === '0') // Devolverá FALSE ya que se compara con 'triple =' el valor y tipo de dato

console.log(4 != 5) //VERDADERO
console.log(4 < 5) //VERDADERO
console.log(4 >= 5) //FALSO


// OPERADORES logicos

// Se usa el operador 'and' colocando 'doble &'

console.log(true && true)  // VERDADERO
console.log(true && false) // FALSO
console.log(false && true) // FALSO
console.log(false && false) // FALSO

// Se usa el operador 'and' colocando 'doble ||'

console.log(true || true)  // VERDADERO
console.log(true || false) // VERDADERO
console.log(false || true) // VERDADERO
console.log(false || false) // FALSO


// CONDICIONALES

let autorizado = true
if (autorizado) {  
    document.write('Bienvenido') 
    console.log('Puede Ingresar!')
}  
else { alert('No autorizado') }


let color = 'amarillo'

switch(color){
    case 'verde':
        console.log('Exito')
        break
    case 'amarillo':
        console.log('Advertencia')
        break
    default:
        console.log('Error')
        break
}


// FUNCIONES

function suma(a, b) { return a + b } // esta es una funcion de suma
suma(1,3)


//Funcion quicksort

function quicksort(lista) {
    if(lista.length <= 1){
        return lista
    }
    
    let pivote = lista[0]
    let izquierda = []
    let derecha = []

    for(let i = 1; i < lista.length; i++){
        lista[i] < pivote ? izquierda.push(lista[i]) : derecha.push
        (lista[i])
    }
    return quicksort(izquierda).concat(pivote, quicksort(derecha))
}

let numeros = [23, 45, 67,12, 4, 17, 11]
let listaOrdenada = quicksort(numeros)
console.log(listaOrdenada)


// BUCLES

let lista2 = [1,2,3,4,5,6]
let entero = 100
let emergencia = 911

//De la lista anterior ahora se jará un recorrido y se sumará cada valor definiendo el valor a sumar
for (elemento of lista2) { 
    let suma = sumar(elemento, 5)
    console.log(suma) // se imprimira el resultado de cada suma
}

while (entero <= emergencia) {
    console.log(entero)
    entero++
}

// while (true) {console.log(i++)} ->con esto se imprimirá de uno en adelante sin parar.


// PROGRAMACION ORIENTADA A OBJETOS 

let lenguajes = { 
    nombre: 'Javascript',
    año: 1995,
    descripcion: function() {
        console.log(`${this.nombre} fue creado en ${this.año}`)
    }
}

lenguajes.descripcion() // imprimirá el valor asignado

// CLASES

class Animal {
    constructor(nombre, sonido) {
        this.nombre = nombre
        this.sonido = sonido
    }

    hazSonido(){
        console.log('soy un '+ this.nombre + ' y ' + this.sonido)
    }
}

let perro = new Animal('perro', 'woof')
let gato  = new Animal('gato', 'miau')
let tigre = new Animal('tigre', 'grrr')

perro.hazSonido()
gato.hazSonido()
tigre.hazSonido()


// MODULOS. Archivos del mismo lenguaje de programación

//En modulo.js:

function resta(a, b){
    console.log(a - b)
}

export {resta}

// En index.js

import {resta} from './modulo.js'

resta(10, 23)

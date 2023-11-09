// ----- INTRODUCCION A JAVASCRIPT ---- //

// ----- ECMA SCRIPT ----- //
/* - Javascript es manejado por la especificación de ECMASCRIPT y en la actualidad se usan las versiones ES6 y posteriores.
   - ES6 o también conocida como ES2015 ya que se declara la especificación por año y no por número de versión. */

// ----- SCOPE EN JAVASCRIPT ----- //
/* - El Scope se refiere al alcance de una variable en un documento de JS. El cual se define con los nombres var y let, para el alcance global y local respectivamente.*/

var totalAlcance = "Variable global" // No se suele usar
let alcanceLimitado = "Variable local" // El estandar actual para definir variables


// ----- MOSTRAR MENSAJE POR CONSOLA ----- //
console.log('Hola mundo')

// ----- RENDERIZACIÓN DE DATOS ----- //
document.write('texto') // Muestra texto en la pagina web.
alert(true) // Muestra una alerta con lo que tiene el parámetro.


// ----- VARIABLES ----- //
// - Elementos con un valor que puede ser cambiado.
let telefono = '948752900'
alert(telefono)

// ----- CONSTANTES ----- //
// - Elementos con un valor que no cambia.
const pi = 3.14159265359

// ----- PROGRAMACIÓN ORIENTADA A OBJETOS ----- //
// - Todo en Javascript es un objeto.
let lenguajes = {
    nombre: 'Javascript',
    año: 1995,
    descripcion: function () {
        // Aqui estamos usando el 'string literal'.
        console.log(`${this.nombre} fue creado en ${this.año}`)
    }
}

lenguajes.descripcion() // imprimirá el valor asignado


//  ----- MÓDULOS ----- //
// - Usamos los ES Modules 'import' y 'export' //

// En 'modulo.js': .
function resta(a, b) {
    console.log(a - b)
}
export { resta }

// En 'index.js', o sea la principal:
import { resta } from './modulo.js'
resta(10, 23)
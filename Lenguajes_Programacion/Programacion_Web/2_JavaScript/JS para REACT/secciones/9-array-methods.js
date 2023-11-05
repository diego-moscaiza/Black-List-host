/* ----- 9.-  METODOS CON ARRAYS (arreglos) ------- */
// Los metodos utilizados son : forEach, map, find, filter, concat, some, every, includes, reduce

// Creamos un arreglo.
// NOTA: Es recomendable declarar el nombre del arreglo en plurar para que así podamos definir otra variable en singular que equivaldrá a cada uno de los valores del arreglo.

const names = ['ryan', 'joe', 'maria']
const otherNames = ['marcos', 'mario', 'john']

// Prueba con un buqle 'for'
// for (let i = 0; i < names.length; i++) {
//     const element = names[i]
//     console.log(element)
// }


// Usando 'forEach()', y este metodo espera una funcion como parametro y el resultado es cada uno de los valores del arreglo.
names.forEach(function (name) {
    console.log(name)
})

// Con 'map()' recorre el arreglo y lo puede devolver pero también puede devolver el resultado como un arreglo que se puede modificar si lo definimos en una constante.
const newNames = names.map(function (name) {
    //console.log(name)
    // return name;
    return `Hola ${name}`
})

console.log(newNames)

// Con 'find()' podemos encontrar un valor y devolverlo.
const nameFound = names.find(function (name) {
    if (name === 'joe') {
        return name
    }
})

console.log(nameFound)

//  Con 'filter()' podemos quitar un valor del arreglo.
const namesFilter = names.filter(function (name) {
    // Comparamos si el nombre es 'joe' y retornará solo él.
    // if (name === 'joe') {
    //     return name
    // }

    // Comparamos si el nombre NO es 'joe' y NO retornará él.
    if (name !== 'joe') {
        return name
    }
})

console.log(namesFilter)

// Con 'concat()' podemos juntar arreglos
console.log(names.concat(otherNames))
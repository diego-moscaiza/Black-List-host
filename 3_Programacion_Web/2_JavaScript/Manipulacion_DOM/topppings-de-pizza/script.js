// CON 'getElementeById' se obtienen datos por el ID que tiene la etiqueta
// El ID es único, si hubiese mas de una etiqueta con el mismo ID, solo tomará el primero.
const contenedor = document.getElementById('contenedor');
const titulo = document.getElementById('titulo');


// 'innerHTML' muestra la sintaxis HTML dentro del valor declarado, o sea los descendientes.
//console.log(contenedor.innerHTML)

// 'typeof' muestra el tipo de dato del valor, que puede ser Object.
// console.log(typeof contenedor)

// Pero con el 'innerHTMl' muestra como STRING
// console.log(typeof contenedor.innerHTML)

// 'innerText' devolverá todo el texto de ese HTML con el marcado quitado
// Si colocamos 'typeof' lo mostrará como STRING
// console.log(contenedor.innerText)

// 'tagName' muestra el nombre de la etiqueta, por ejemplo H1, div, etc.
//console.log(titulo.tagName)


// CON 'getElemetByClassName' podemos obtener varios elementos con la misma clase.

const toppings = document.getElementsByClassName('topping');

// Imprimimos los datos en consola
// console.log(toppings)

// Imprimimos la cantidad de datos en consola
//console.log(toppings.length) 

// Podemos acceder a los indices
//console.log(toppings[0]) 

// Se puede acceder a cualquier tipo de dato siempre que se especifique, por ejm el ID.
// console.log(toppings[0].id) 



// CON 'getElemetByTagName()' podemos acceder a los elementos HTML. 

const misToppings = document.getElementsByTagName('li');   

// Devuelve lo que hay en al etiqueta 'li'
//console.log(misToppings)

const toppingsFondoMarron = document.getElementsByTagName('fondo-marron')

// Devuelve lo que hay en la clase 'fondo-marron'
//console.log(toppingsFondoMarron)


// ----- SELECCIONAR ELEMENTOS CON ETIQUETAS CSS ---------

// Son utiles cuando es necesario un proceso de selección más especifico, como  conbinar id, clases, distintos estados como activo o enfocado.

// ---->'querySelector()' permite seleccionar el primero elemento que cumpla con el criterio señalado


const aceitunas = document.querySelector('#aceitunas')

// Devuelve la etiqueta completa donde se encuenta el id 'aceitunas'
// console.log(aceitunas);

// Se muestra como Object con 'typeof'.
// console.log(typeof aceitunas);

const primerToppigNaranja = document.querySelector('.topping.fondo-naranja')

// Mostrará la etiqueta completa qeu tenga las clases '.topping' y '.fondo-naranja'
//console.log(primerToppigNaranja)

const otroToppigNaranja = document.querySelector('ul li.fondo-naranja')

// En el parametro se puede escoger el elemento que se va a mostrar definiendo bien los selectores CSS'.
//console.log(otroToppigNaranja)

// Aqui usamos una caracteristica CSS en el parametro para no llamar al primero elemento que no sea marron.
const primerToppigNoMarron = document.querySelector('ul li:not(.fondo-marron)')
console.log(primerToppigNoMarron)


// ---->'querySelectorAll()' permite seleccionar todos los elementos que cumplan con el criterio señalado






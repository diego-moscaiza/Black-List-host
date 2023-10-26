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
//console.log(primerToppigNoMarron)


// ---->'querySelectorAll()' permite seleccionar todos los elementos que cumplan con el criterio señalado

const toppingsFondoNaranja = document.querySelectorAll('.topping.fondo-naranja')

//Al imprimir la información muestra un 'NodeList' que muestra todos los nodos que tengan el selector declarado en el parametro
//console.log(toppingsFondoNaranja)

//Se puede acceder a los indices del NodeList y mostrar nodo por nodo
//console.log(toppingsFondoNaranja[0])
//console.log(toppingsFondoNaranja[1])

// ------- ASIGNAR ESTILO CON JS ------------- //

// Se peude modificar los estilos de una etiqueta HTML llamando a la función 'querySelector' y en el parametro la clase o id que se desee.

const primerTopping = document.querySelector('.topping')

//Despues de declarar la constante, se coloca la función style y luego el atributo y luego asignar lo que se desee estilar.

//primerTopping.style.backgroundColor = 'blue'
//primerTopping.style.color = '#6dff00'
//primerTopping.style.textTransform = 'uppercase'


// ---------- TEXTO EN EL DOM ----------- //

// ----> Acceder al texto <---- //
// Se puede usar innerHTML, innerText, textContent, pero cada uno tendra diferente representación.


const listaDeToppings = document.getElementById('lista-toppings')

/*console.log('> innerHTML')
console.log(listaDeToppings.innerHTML)*/

/*console.log('> innerText')
console.log(listaDeToppings.innerText)*/

/*console.log('> textContent')
console.log(listaDeToppings.textContent)*/


// ----> Modificar al texto <---- //

const tituloMod = document.getElementById('titulo')

// Este es un ejemplo de como modificar el texto HTML con JS
titulo.innerText = 'Mis Toppings Favoritos'


// ----> Modificar atributos de un elemento <---- //

const enlace = document.getElementsByTagName('a')

//Accedemos al indice del HTML Collection y luego usamos la funcion getAttribute() y en el parametro declaramos al 'href' de la constante 'enlace'.
//console.log(enlace[0].getAttribute('href'))

// Podemos borrar el atributo asi:
//console.log(enlace[0].removeAttribute('href'))

// Podemos cambiar el atributo asi:
console.log(enlace[0].setAttribute('href', 'https://www.freecodecamp.org'))

// ----> Agregar y modificar Clases <---- //

























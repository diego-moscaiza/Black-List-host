/* ---------- 3.-  ARROW FUNCTION -> LAS FUNCIONES FLECHAS ---------- */

// Declarando una función normal:
function nameFunction() {
    return "Hola"
}

// Declarando una funcion flecha '=>':

/* ESTRUCTURA:
- Se crea una constante luego se asigna con un paréntesis '()' para los parametros de la función, después colocamos una flecha '=>' y por último se escribe lo que se desea ejecutar.*/

// - Aquí los corchetes y el 'return' son implicitos.
const newArrowFunction1 = () => "I'm an arrowFunction"

// - Pero si fueran más líneas podemos usar los corchetes y el 'return'.
// - Y si añadimos una variable o mas adicional dentro de la función y queremos un resultado con esa o esas variables adicionales se tiene que retornar la función usando el 'return' con ese valor.
const newArrowFunction2 = () => {
    let message = "Yes, I'm an arrowFunction, again ツ"
    return message
    // return "Yes, I'm an arrowFunction, again ツ" // Devuelve lo mismo
}

newArrowFunction1(); // Ejecutar funcion


// Otro ejemplo:
const array1 = [1, 2, 3, 4];

// '10' + 1 + 2 + 3 + 4
const initialValue = 10;

const sumWithInitial = array1.reduce(
    // - Estrctura usando una "funcion regular"
    function (accumulator, currentValue) {
        return accumulator + currentValue
    }, initialValue
);

const sumWithInitial1 = array1.reduce(
    // - Estrctura usando una "funcion flecha"
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);
// - En este caso se puede añadir un valor fuera de la función interna y cona la función flecha esta puede estar incluida.

console.log(sumWithInitial1);
// Retornará 20 en ambas.



// FUNCTION WHIT JSX (USED ON REACT)
function ListaDeTareas(){
    return(
        <ul>
            {listado.map(elemento => (<li>{elemento.nombre}</li>))}
        </ul>
    );
}

// - Para más sobre funciones flechas: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions
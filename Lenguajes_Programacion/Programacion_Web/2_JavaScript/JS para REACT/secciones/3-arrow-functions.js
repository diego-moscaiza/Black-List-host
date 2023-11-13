/* ---------- 3.-  ARROW FUNCTION -> LAS FUNCIONES FLECHAS ---------- */

// Declarando función:
function nameFunction() {
    return "Hola"
}

// Funcion Flecha '=>':

// Se crea una constante luego se asigna con un paréntesis '()' para los parametros de la función
// Después colocamos una flecha '=>' y por último se escribe lo que se desea ejecutar.
const newArrowFunction1 = () => "I'm an arrowFunction"

// Si fueran más lineas después de la flecha abrimos corchetes.
const newArrowFunction2 = () => {
    "Yes, I'm an arrowFunction, again ツ"
}

newArrowFunction1(); // Ejecutar funcion


// Otro ejemplo:
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 10;

const sumWithInitial = array1.reduce(
    // Estrctura usando una "funcion regular"
    function (accumulator, currentValue) {
        return accumulator + currentValue
    }, initialValue
);

const sumWithInitial1 = array1.reduce(
    // Estrctura usando una "funcion flecha"
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);
// En este caso se puede añadir un valor fuera de la función interna y cona la función flecha esta puede estar incluida.

console.log(sumWithInitial1);

// - Nota: 1. Los corchetes y el 'return' son implicitos si usamos la o las variables definidas en los parámetros pero si añadimos una variable adicional dentro de la función y queremos un resultado con esa o esas variables adicionales se tiene que retornar la función usando el 'return' con ese valor.


// FUNCTION WHIT JSX (USED ON REACT)
function ListaDeTareas(){
    return(
        <ul>
            {listado.map(elemento => (<li>{elemento.nombre}</li>))}
        </ul>
    );
}

// Para más sobre funciones flechas: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions
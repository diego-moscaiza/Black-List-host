/* ---------- 3.-  ARROW FUNCTION -> LAS FUNCIONES FLECHAS ---------- */

// Declarando funcion:
function nameFunction() {
    return "Hola"
}

// Funcion Flecha:

/*  Se asigna con "=", luego "()" para los parametros de la funcion
    Despues "=>" y escribir lo que se desea ejecutar SOLO si es una fila.*/
const newArrowFunction1 = () => "I'm an arrowFunction"

// Si fueran mas lineas seria "=> { (x) }" lo que se desea ejecutar dentro de corchetes.
const newArrowFunction2 = () => {
    "Yes, I'm an arrowFunction, again ツ"
}

newArrowFunction1(); // Ejecutar funcion


// FUNCTION WHIT JSX (USED ON REACT)
function ListaDeTareas(){
    return(
        <ul>
            {listado.map(elemento => (<li>{elemento.nombre}</li>))}
        </ul>
    );
}

const cuadrado = {
    x: 10,
    y: 10,
}
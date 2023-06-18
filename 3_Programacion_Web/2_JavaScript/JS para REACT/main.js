/* TEMPLATE LITERALS */

//Decalracion de variables
const nombre = "Joel";
const apellido = "Garrido";


//Concatenacion
console.log(nombre + "" + apellido)

//Interporlacion
console.log(`${nombre} ${appellido}`);


//Funcion
//Que retornará un texto con una clase CSS 

function Component({background}) {
    return (<div className={`bg-color-${backgroundColor}`}>Hola</div>);
}


/* ACORTADORES DE NOMBRES (SHORTHAND PROPERTY NAMES) */

/* PRIME EXAMPLE */

const nombre = "Carlos";
const edad = 36;
const Youtube = "https://youtube.com";

const persona = {
    nombre, // (It's rigth)
    edad: edad, //  (So bad, that's repeated)
    Youtube // (!worths)
}

console.log(persona);

/*SECOND EXAMPLE */

//Componente que recibe props o parametros. Dentro se declaran estados
// Y luego se inicializa con los mismo parametros sin hacer "clave : valor".

function Component({initialState, totalCount}) {
    const [state, setState] = useState({initialState, totalCount});
}

/* ARROW FUNCTION -> LAS FUNCIONES FLECHAS*/

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


/* DESTRUCTURING*/

// ASÍ NO
function calcularArea(cuadrado){
    const {x, y} = cuadrado;
    return x * y;
}

// ASÍ SÍ.
// Util para pasar propiedades a un COMPONENETE en REACT.
function calcularArea({x, y}) {
    return x * y;
}


calcularArea(cuadrado)


// Otro ejemplo
// Así es mas legible el JSX. 
function Avatar({ userName, url}){
    return <img src={url} alt={userName}/>
}

/* DEFAULT PARAMETERS */


// ASÍ NOOOOO
function suma (a, b) {
    if (a === undefined || b === undefined){
        console.log("Debes introducir 2 valores");
        return;
    }
    return a + b;
}

// ASÍ SÍIII
// PARA QUE NO SALGA UN ERROR AGREGAMOS 0 
function suma (a = 0, b = 0) {
    return a + b;
}

suma (3)































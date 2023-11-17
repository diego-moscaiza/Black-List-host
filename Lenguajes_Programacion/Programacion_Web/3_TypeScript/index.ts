let mensaje: string = "Hola mundo";
console.log(mensaje)

// TypeScript tiene la capacidad de inferir el tipo.

// Variables.

let libro: string = "Clean Code";

let entero: number = 100;

let decimal: number = 1.9345345;

let autorizado: boolean = true;
let seleccionado: boolean = false;

let telf: string = '345-654-654';
let color: string = "azul";

// Constantes

const pi: number = 3.141592;

// Arreglos
let numeros: number[] = [23, 45, 16, 37, 3, 99, 22];

let animales: string[] = ['perro', 'gato', 'tortuga'];

type mixto = string | number | boolean | string[];
let datosMixtos: mixto[] = ['texto', 69, true, ['324']]

// Diccionario
let jugadores: { [key: number]: string } = {
    10: 'Messi',
    7: 'Cristiano Ronaldo'
};

// Podemos usar Record.
let paises: Record<string, string> = {
    PE: 'Peru',
    EC: 'Ecuador',
    MX: 'Mexico'
};

let emails: Record<string, string[]> = {
    'Diego': ['diego@emails.com'],
    'Ricardo': ['ricardo@emails.com', 'ricardo@outlook.com']
}

// Operadores


console.log(1 + 1);
console.log(2 - 4);
console.log(10 * 10);
console.log(10 / 2);
console.log(10 % 2);


//console.log(1 == "1"); // Muestra error.
console.log(1 == 1);
console.log(1 != 1);
console.log(1 < 1);
console.log(1 > 1);
console.log(1 <= 1);
console.log(1 >= 1);

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(!true);
console.log(!false);

// Condicionales

// If, else - else if.

let entero1: number = 100;

if (entero1 == 99) {
    console.log('Puede Ingresar');
} else if (entero1 == 100) {
    console.log('No puede ingresar');
} else {
    console.log('No puede ingresar');
}

// Switch.

// - Usamos 'casting' que significa que una variable va a tener solamente un tipo de valor.
type opciones = 'verde' | 'amarillo' | 'rojo';
let color1: string = 'amarillo';

switch (<opciones>color1) {
    case 'verde':
        console.log('Éxito');
        break;
    case 'amarillo':
        console.log('Advertencia');
        break;
    default:
        console.log('Error');
        break;
}

// funciones

function sumar(primero: number, segundo: number): number {
    return primero + segundo;
}

sumar(3,4);

console.log(sumar)

// -

let entero2: number = 100;
function multiplicar(primero : number, segundo: number): void {
    console.log(primero * segundo);
}

multiplicar(entero2, 3)

// -

function printFirstElemet(lista: any[]): void {
    console.log(lista[0]);
}

printFirstElemet(animales)


// Funcion quicksort.





// Ejemplos de Expresiones regulares en JS

// Formas de como definir una RegExp
const regExpNew = new RegExp("ab+c");
const regExp = /ab+c/;

// Métodos de las expresiones regulares
// - exec(). Ejecuta una búsqueda por una coincidencia en un texto. En consola muestra un arreglo con la informacion de la ejecución.
// - test(). Prueba una coincidencia en una cadena. Devuelve true o false.
// - match(). Devuelve un arreglo que contiene todas las coincidencias, incluidos los grupos de captura, o null si no se encuentra ninguna coincidencia.
// - matchAll(). Devuelve un iterador que contiene todas las coincidencias, incluidos los grupos de captura.
// - search(). Prueba una coincidencia en una cadena. Devuelve el índice de la coincidencia, o -1 si la búsqueda falla.
// - replace(). Ejecuta una búsqueda por una coincidencia en una cadena y reemplaza la subcadena coincidente con una subcadena de reemplazo.
// - replaceAll(). Ejecuta una búsqueda de todas las coincidencias en una cadena y reemplaza las subcadenas coincidentes con una subcadena de reemplazo.
// - split(). Utiliza una expresión regular o una cadena fija para dividir una cadena en un arreglo de subcadenas.


// 1. La expresión regular que sólo contiene texto, números o símbolos sólo se podrá encontrar la conincidencia una sola vez
const regExp1 = /sol/;

// - Ejemplo 1: Usando 'exec()'

// - Forma breve con 'exec()'
let frase1 = regExp1.exec("hoy parece que va a salir el sol")
console.log(frase1);

// - Forma amplia con 'exec()'
const frase1_1 = "hoy parece que va a salir el sol";
const validacion1 = regExp1.exec(frase1_1);
console.log(validacion1); // Output -> index: 29. Index se refiere a la posicion del texto donde se encontró la coincidecnia.

// - Ejemplo 2: Usando 'match()' no se podrá encontrar más de una coincidencia porque la expresion regular no está definida con el modificador global 'g'

// - Forma breve con 'match()'
const frase2 = ("solamente quiero comer solo").match(regExp1);
console.log(frase2);

// - Forma amplia con 'match()'
const frase2_2 = "solamente quiero comer solo";
const validacion2 = frase2_2.match(regExp1);
console.log(validacion2);

/* MODIFICADORES */

// 2. Usamos el modificador global -> 'g' para que muestre todas las coincidencias en el texto.
const regExp2 = /cena/g;
const frase3 = "la quincena es para la cena.";
const validacion3  = frase3.match(regExp2);
console.log(validacion3);

// 3. Usamos el modificador insensytive -> 'i' para buscar las coincidencias sin importar que esté en mayuscula o minúscula
const regExp3 = /LA/i;
const frase4 = "la espera en el aeropuerto de LA";
const validacion4  = frase4.match(regExp3);
console.log(validacion4);

/* CORCHETES */

// 4. Usamos los corchetes [] cuando queramos encontrar cualquiera de los caractéres que esté adentro.
const regExp4 = /[eo]/g;
const frase5 = "te marqué anoche";
const validacion5  = frase5.match(regExp4);
console.log(validacion5);

// 5. Dentro del corchede podemos colocar un rango por ejemplo que busque numeros del 0 al 5.
const regExp5 = /[0-5]/g;
const frase6 = "Mi telefono es 055 47898";
const validacion6  = frase6.match(regExp5);;
console.log(validacion6);

// 6. Cuando usamos corchetes y colocalos el símbolo '^' antes de un valor, valores juntos que se convierten en opciones o un rango, esos valores serán omitidos.
const regExp6 = /[^0-9]/g;
const frase7 = "Mi telefono es 055 47898";
const validacion7 = frase7.match(regExp6);
console.log(validacion7);

/* META CARACTERES */

// 7. Con el caracter '.' antes de otra letra, numero o simbolo estamos pidiendo de que capture el caracter anterior incluyendo espacios en blanco.
const regExp7 = /.h/g;
const frase8 = "Dos horas tomando alcohol";
const validacion8 = frase8.match(regExp7);
console.log(validacion8);

// 8. Al usar '\d' estamos solicitando que capture sólo dígitos.
const regExp8 = /\d/g;
const frase9 = "Mi casa está a 11 cuadras.";
const validacion9 = frase9.match(regExp8);
console.log(validacion9);

// 9. Al usar '\D' estamos solicitando que capture sólo caractéres.
const regExp9 = /\D/g;
const frase10 = "Mi casa está a 11 cuadras.";
const validacion10 = frase10.match(regExp9);
console.log(validacion10);

// 10. Usando '\w' se buscan los caracteres que no sean símbolos, solamente letras del alfabeto y dígitos.
const regExp10 = /\w/g;
const frase11 = "LPW-605&á";
const validacion11 = frase11.match(regExp10);
console.log(validacion11);

// 11. Usando '\b' al inicio sirve para definir que se busque caracteres al principio de una cadena
const regExp11 = /\babc/g;
const frase12 = "abc123abc";
const validacion12 = frase12.match(regExp11);
console.log(validacion12);

// 12. Usando '\b' al último sirve para definir que se busque caracteres al final de una cadena
const regExp11_1 = /abc\b/g;
const frase12_1 = "abc123abc";
const validacion12_1 = frase12_1.match(regExp11_1);
console.log(validacion12_1);

/* CUANTIFICADORES */

// 13. El operador '+' se usa para que se capture una o más coincidencias.
const regExp12 = /a+b+c+/g;
const frase13 = "abc123aaaabbbbbccccc";
const validacion13 = frase13.match(regExp12);
console.log(validacion13);

// 14. El operador '*' se usa para que se capture ninguna o más coincidencias.
const regExp13 = /0*55/g;
const frase14 = "05523445523188055";
const validacion14 = frase14.match(regExp13);
console.log(validacion14);

// 14. El operador '?' sirve para que se cumpla o no una coincidencia una sola vez. En otras palabras, es opcional.
const regExp14 = /abz?/g;
const frase15 = "abacccabzabzzz";
const validacion15 = frase15.match(regExp14);
console.log(validacion15);

// 15. Con las llaves '{}' solo permite que se encuentre la coincidencia la cantidad de veces que se defina adentro.

// - Ejemplo 1: es necesario los parentesis para un texto

const regExp15 = /(lol){2}/g;
const frase16 = "lollollol";
const validacion16 = frase16.match(regExp15);
console.log(validacion16);

// - Ejemplo 2:

const regExp15_1 = /5{3}/g;
const frase16_1 = "2233555556";
const validacion16_1 = frase16_1.match(regExp15_1);
console.log(validacion16_1);

// 16. Con el símbolo '^' estamos buscando coincidencias al inicio de una cadena de texto.
const regExp16 = /^(www)/;
const frase17 = "www.mycompany.com";
const validacion17 = frase17.match(regExp16);
console.log(validacion17);

// 17. Con el símbolo '$' estamos buscando coincidencias al final de una cadena de texto.
const regExp17 = /(com)$/;
const frase18 = "mycompany.com";
const validacion18 = frase18.match(regExp17);
console.log(validacion18);

// 18. Con el cuantificador '?=' analiza la coincidencia que esté antes de lo que se desea buscar.

const regExp18 = /(?=\.\A)/;
const frase19 = "file.txt";
const validacion19 = frase19.match(regExp18);
console.log(validacion19); // por resolver
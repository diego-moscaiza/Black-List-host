/* ----------  1 .- TEMPLATE LITERALS ---------- */

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
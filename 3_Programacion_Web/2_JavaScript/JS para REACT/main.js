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


/* ---------- 2.-  ACORTADORES DE NOMBRES (SHORTHAND PROPERTY NAMES) ---------- */

/* PRIME EXAMPLE */

const Nombre = "Carlos";
const edad = 36;
const Youtube = "https://youtube.com";

const persona = {
    Nombre, // (It's rigth)
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


/* ---------- 4.-  DESTRUCTURING ----------*/

// ASÍ NO
/* 
function calcularArea(cuadrado){
    const {x, y} = cuadrado;
    return x * y;
}
*/

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

/* ---------- 5.-  DEFAULT PARAMETERS ---------- */


// ASÍ NOOOOO
/*
function suma (a, b) {
    if (a === undefined || b === undefined){
        console.log("Debes introducir 2 valores");
        return;
    }
    return a + b;
}
*/

// ASÍ SÍIII
// PARA QUE NO SALGA UN ERROR AGREGAMOS 0 
function suma (a = 0, b = 0) {
    return a + b;
}

suma () // No devolvera nada pero no aparecerá error si no se le este pasando ningun argumento  a la funcion


/* ----- 6.-  SPREAD OPERATOR / REST PARAMETERS ------- */

const array = [1, 2 ,3, 4, 5]
const otroArray = [6, 7, 8, 9, 10]

// Asi ya no
// const newArray = array.concat(otroArray)

//Asi sí
const nuevoArray = [...array, ...otroArray]
console.log(nuevoArray)

// ES UTIL AL MOMENTO DE AGRUPAR OBJETOS EN UN ARREGLO YA QUE SE NECESITA DE MENOS CODIGO.
// TODO SE UNE EN UN ARREGLO SIN NECESIDAD DE CONCATENAR UNOS CON OTROS

// OTRO EJEMPLO

const objeto1 = {
    a: "a",
    b: "b",
    c: "c"
}

const objeto2 = {
    d: "d",
    e: "e",
}

// Asi ya no
// const nuevoObjeto = Object.assign({}. objeto1, objeto2)
// console.log(nuevoObjeto)

// Asi sí
const newObjeto = [... objeto1, ... objeto2]
console.log(newObjeto)

// OTRO EJEMPLO con REACT

// Puede funcionar con normalidad
function Componente({id, name, username, profile}) {
    return <NuevoComponente key={id} name={name} username={username} profile={profile}/>
}

// Una forma mas abreviada en las propiedades
function Componente({id, ...props}) {
    return <NuevoComponente key={id} {...props}/>
}


/* ----- 7.-  MODULOS DE ECMA SCRIPT (ES MODULES)------- */

export function suma(a, b) {
    return ""
}


export function otraFuncion() {
    return ""
}


export default function resta(a, b) {
    return ""
}


// Se importan las funciones

import { suma, otraFuncion} from './suma'
import resta from './resta'

function calculadora () {
    suma();

    resta();
}


// COMO SE USA EN REACT --->

// Con esta linea se puede llamar a cada funcion de React sin poner 'React' al inicio
import React, {useState, useEffect, Fragment} from 'react'


// Esto es declarando cada funcion por separado

React.useState,
React.useEffect,
React.Fragment


/* ----- 8.-  TERNARY OPERATOR ------- */






























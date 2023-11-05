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
/* ----- 12.-  OPTIONAL CHAINING ( ?. ) - encadenamiento opcional  ------- */

/* Esto permite acceder de forma segura a variables anidadas dentro de una estructura dentro de un objeto antes para comprobar el un segundo o tercer nivel si esa propidad en el objeto existia se tenia que realizar varias comprobaciones.*/

// Ejemplo
const user = {
    nombre,
    edad,
    location: {
        x,
        y,
        city: {/**/}
    }
}

// ASI NO
/* const zipcode = user && user.location && user.location.city && user.location.city.zipcode */

// ASÌ SI
// Se coloca la interrogante (?) antes del punto(.).
// Esto comprueba si existe cada uno dentro de la variable anterior
const zipcode1 = user?.location?.city?.zipcode

// EJEMPLO CON UNA FUNCION EN REACT

function User () {
    return (<div>ZIP CODE: {user?.location?.city?.zipcode}</div>)
}
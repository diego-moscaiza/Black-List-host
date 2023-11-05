/* ----- 8.-  TERNARY OPERATOR ------- */

// El operador ternario es una alternatica añ tipo IF ELSE

// EJEMPLO 1:

const coche = {
    marca : "Tesla",
    modelo: "Cybertruck"
};

// FORMA NORMAL CON IF ELSE
/*
let modelo
if (coche.modelo) {
    modelo = coche.modelo
} else {
    modelo = "XD"
}
*/

// CON EL OPERADOR TERNARIO

let modelo = coche.modelo ? coche.modelo: "XD"

// llamamos al modelo
modelo;



// EJEMPLO 2:

// Este es un renderizado condicional
function ListaTareas ({tareas}) {
    return (
        <React.Fragment>
            {tareas.length ? (
                <ul>
                    {tareas.map}
                </ul>
            ) : (
                <div>No hay tareas</div>
            )}
        </React.Fragment>
    )
}
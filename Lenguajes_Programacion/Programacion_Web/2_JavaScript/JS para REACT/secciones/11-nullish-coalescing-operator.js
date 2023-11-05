/* ----- 11.-  nullish coalescing ( ?? ) operator  -  (Operator de coalescencia nula) ------- */

// Similar a la opracion ternario, pero sirve al comprobar un valor y si es null o undefined se le puede asignar un valor por defecto

// Ejemplo con el opracion ternario.
function suma(a, b ) {
    a = a == null ? 0 : a
    b = b == null ? 0 : b
    return a + b
}

// Ejemplo con el nullish coalescing OP,
function suma(a, b ) {
    // AQUI SE VE LA DIFERENCIA
    a = a ?? 0
    b = b ?? 0
    return a + b
}

// Llamamos a suma
suma()

// Ejemplo con REACT
function Avatar({user}) {
    return <img src={user.imageUrl ?? 'https://placeholder.it/kjlhsadkjhas'}/>
}
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
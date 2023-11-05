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
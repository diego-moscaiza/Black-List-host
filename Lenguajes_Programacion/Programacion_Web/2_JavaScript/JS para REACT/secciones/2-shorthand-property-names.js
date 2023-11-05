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
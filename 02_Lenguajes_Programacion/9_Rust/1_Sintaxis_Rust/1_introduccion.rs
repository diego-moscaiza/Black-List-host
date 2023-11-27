/*
    Rust, lenguaje de programación alternativa a C/C++. De bajo nivel y con una eficiencia espectacular. No se tiene que manejar los punteros como C. Este lenguaje es imperativo, procedural, concurrente y funcional.
*/

// Para ejecutar un programa con rust se necesita crear una funcion con 'fn'
fn main() {
    // Impresión
    println!("Hello World");

    // Variables
    // Rsut puede inferir el dato o se le puede definir exactamente el tipo de dato.

    // Tipo Cadena (String)

    // - Las variables en Rust no puede mutar a menos que se les permita con la propiedad "mut".

    let mut my_string: &str = "Cadena de texto"; // Muestra error si no se usa la variable.
    // println!(my_string); // Error
    println!("{}", my_string);
    println!("{ my_string }");

    my_string = "Cambiando valor de la cadena"; // Cambiando el contenido del dato despues de haberlo usado
    println!("{ my_string }");

    // my_string = 6; // Error no se puede modificar el tipo de dato cuando ya se definió

    // - Las cadenas de texto se puede expresar de 2 formas:
    
    /* 1. Con el tipo de cadena '&str' que es de UTF-8 nos permite una longitud fija y se reseva el máximo de memoria que puede almacenar una cadena de texto.*/
    // let my_string2: String = "Otra cadena de texto"; // Error: Se detecta cono tipo de dato '&str' .

    /* 2. Con el tipo de cadena 'String' nosotros cade vez vamos redefiniendo el tamaño de la cadena de texto. */
    let my_string2: String = String::from("Otra cadena de texto");
    println!("{ my_string2 }");


    // Tipo Entero (Int)

    // - Los enteros tienen diversis tipos de este valor como: i8, i16, i32, i64, i128 e isize (pointer size).
    let my_int: i32 = 7;
    my_int = my_int + 4;
    println!("{ my_int }"); // 11
    println!("{ }", my_int - 1); // 10
    println!("{ my_int }"); // 11 :)

    println!("Este es el valor de la variable my_int: {}", my_int);

    let my_int64: i64 = 7;
    println!("{ my_int64 }");


    // Tipo Flotante (Float)
    // - Al igual que los enteros los floantes tambien tienen varios tipos como f8, f16, etc.

    let mut my_float: f64 = 6.5;
    println!("{ my_float }");

    my_float = my_float + my_int; // Intentando sumar flotantes con enteros.
    // println!("{ my_float }"); // Error

    let my_float2: f32 = 8.5;
    println!("{ my_float2 }");


    // Tipo Buleano (Booleans)

    let mut my_bool: bool = false ;
    println!("{my_bool}");

    my_bool = true;
    println!("{my_bool}");


    // Constantes
    // - Usamos el UPPER_CAMMEL_CASE y debemos definir el tipo de dato; en constantes no se puede inferir el tipo de dato.

    const MY_CONST: &str = "Mi propiedad constante";
    MY_CONST = "";
    println!("{MY_CONST}");

}
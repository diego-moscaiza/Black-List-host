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

    // Condicionales (Control de flujo)

    // If, else - else if.


    // - Ejempl0 1:
    if my_int == 11 {
        println!("El valor es 10");
    } else {
        println!("El valor NO es 10");
    }

    // - Ejempl0 2:

    my_int == 10;
    my_string == "Hola";

    if my_int == 01 &&  my_string == "Hola"{
        println!("El valor es 10");
    } else if my_int == 11 || my_string == "Hola" {
        println!("El valor NO es 10");
    } else {
        println!("El valor no es 10 ni 11");
    }




    // Vector (Vector). Es como una lista.
    let mut my_list: Vec<&str> = vec!["Brais", "Diego", "mail.com", "36"];
    my_list.push("Joel");
    // Se debe usar la convencion para la impresion de datos interpolados {:?} o {:#?}
    println!("{:?}", my_list);
    println!("{}", my_list[1]); // Accediendo a un indice. No es necesario la convención anterior.

    // Métodos con vectores

    // Modificaciones (Sets)

    // - Usando 'HashSet'
    let mut my_set : HashSet<&str> = vec!["Brais", "Diego", "mail.com", "36"].into_iter().collect();
    my_set.insert("Brais"); // Usamos 'insert()' para ingresar las datos al vector
    println!("{:?}", my_set); // Con 'HashSet' los datos están desaordenadosno y no permite datos repetidos en elvector.

    // Mapas (Maps)

    let mut my_map : HashMap<&str, i32> = vec![("Brais", 36), ("Diego", 23)]
        .into_iter()
        .collect();
    my_map.insert("Joel", 48);
    println!("{:?}", my_map);


    // - NOTA: Para acceder a un valor como si fuera un puntero se usa el '&' al principio del nombre del valor.
    // Bucles

    // For
    for value in &my_list {
        println!("{}", value);
    }

    for value in &my_set {
        println!("{}", value);
    }

    for (key, value) in &my_map {
        println!("{} {}", key, value);
    }

    // While

    let mut my_counter = 0
    while my_counter < my_list.len() {
        println!("{}", my_list[my_counter]);
        my_counter += 1;
    }

    // LLamando una funcion
    my_fn();

    // Instaciando una estructura
    let my_struct = MyStruct:: new("Diego", 23);
    println!("{} {}", my_struct.name, my_struct.age);

}


// Funciones

fn my_fn() {
    println!("Esto es una funcion");
}

// Estructuras. Funciona como clases

struct MyStruct {
    name : String,
    age: i32,
}

impl MyStruct {
    fn new(name : &str, age: i32,) -> MyStruct{
        MyStruct {
            name :String::from(name),
            age
            }
    }
}
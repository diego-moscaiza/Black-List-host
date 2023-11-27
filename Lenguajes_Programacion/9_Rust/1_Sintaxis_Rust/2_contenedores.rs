fn main() {

    // 1. Vector (Vector). Es como una lista.
    let mut my_list: Vec<&str> = vec!["Brais", "Diego", "mail.com", "36"];
    my_list.push("Joel");
    // Se debe usar la convencion para la impresion de datos interpolados {:?} o {:#?}
    println!("{:?}", my_list);
    println!("{}", my_list[1]); // Accediendo a un indice. No es necesario la convención anterior.

    // 2. Sets

    // - Usando 'HashSet'
    let mut my_set : HashSet<&str> = vec!["Brais", "Diego", "mail.com", "36"].into_iter().collect();
    my_set.insert("Brais"); // Usamos 'insert()' para ingresar las datos al vector
    println!("{:?}", my_set); // Con 'HashSet' los datos están desaordenadosno y no permite datos repetidos en elvector.

    // 3. Mapas (Maps)

    let mut my_map : HashMap<&str, i32> = vec![("Brais", 36), ("Diego", 23)]
        .into_iter()
        .collect();
    my_map.insert("Joel", 48);
    println!("{:?}", my_map);

    // - NOTA: Para acceder a un valor como si fuera un puntero se usa el '&' al principio del nombre del valor.

}
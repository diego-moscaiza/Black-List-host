fn main() {

    // - Bucles

    // 1. For
    for value in &my_list {
        println!("{}", value);
    }

    for value in &my_set {
        println!("{}", value);
    }

    for (key, value) in &my_map {
        println!("{} {}", key, value);
    }

    // 2. While

    let mut my_counter = 0
    while my_counter < my_list.len() {
        println!("{}", my_list[my_counter]);
        my_counter += 1;
    }

}
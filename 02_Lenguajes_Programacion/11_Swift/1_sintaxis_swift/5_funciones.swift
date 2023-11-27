import Foundation

// Funciones

func myFunc() {
    print("Esto es una función")
}

// Logica para repetir 50 veces
(0...50).foreach { _ in
    myFunc()
}

// Funcion con un tipo definido
func myFunc2 () -> String {
    return "Esto es una función"
}

print(myFunc2)
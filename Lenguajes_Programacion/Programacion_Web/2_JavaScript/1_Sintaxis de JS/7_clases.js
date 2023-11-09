// CLASES //
// - Las clases son azúcar sintáctico, en realidad son funciones que no permite utilizar variables no declaradas.

class Animal {
    constructor(nombre, sonido) {
        this.nombre = nombre
        this.sonido = sonido
    }

    hazSonido() {
        console.log('soy un ' + this.nombre + ' y ' + this.sonido)
    }
}

let perro = new Animal('perro', 'woof')
let gato = new Animal('gato', 'miau')
let tigre = new Animal('tigre', 'grrr')

perro.hazSonido()
gato.hazSonido()
tigre.hazSonido()
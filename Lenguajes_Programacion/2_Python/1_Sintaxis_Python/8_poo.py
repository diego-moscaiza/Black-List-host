# POO (programación orientada a objetos)
lenguajes = {
    'nombre': 'Python',
    'año': 1989
}


def description():
    print('%s fue creado %s' % (lenguajes['nombre'], lenguajes['año']))

description()

# CLASES: Determinan la estructura de un objeto
class Lenguaje:
    def __init__(self, nombre, año):
        self.nombre = nombre
        self.año = año

    def descripcion(self):
        print('%s fue creado %s' % (self.nombre, self.año))

python = Lenguaje('Python', 1989)
javascript = Lenguaje('Javascript', 1995)

python.descripcion()
javascript.descripcion()
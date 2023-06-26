# SINTAXIS DE PYTHON


# IMPRIMIR MENSAJES
print('Hola Mundo')

# VARIBALES

#En cadena o string
libro = 'NUEVO LIBRO'

#Numericos
entero = 100
decimal = 3.14165467

#Booleanos (Si o No)
autorizado = True
seleccionado = False

# LISTAS
numeros = [23, 34, 675, 783]
animales = ['perro,' 'gato', 'ornitorrinco']
datosMixtos = ['texto', 40, True, ['lista interna']]

#Accediendo a un valor de la lista colocando su indice o posición.
numeros[1]
#print(numeros[1])

# DICCIONARIO. Trabaja con "clave : valor"

jugadores = {
    10: 'Messi',
    7: 'Ronaldo'
}

print(jugadores[7]) #Imprimirá el valor correspindiente a su clave

paises = {
    'EC': 'Ecuador',
    'MX': 'México',
    'AR': 'Argentina'
}

emails = {
    'Juan': ['juan@gmail.com'],
    'Ricardo': ['ricardo@gmail.com', 'ricardo@hotmail.com']
}

# CONSTANTES. Valores que no cambiaran su valor nunca.
PI = 3.1416

# OPERADORES. Simboles aritméticos
print(1 + 1) # sumar
print(3 - 1) # restar
print(20 * 4) # multiplicar
print(25 / 5) # dividir

#Operadores comparativos
print(4 == 4) # Comparar si son iguales, tanto en valor como tipo de dato 
print(4 == '4') # 
print(4 != 5) # Comparar si NO son iguales, tanto en valor como tipo de dato
print(4 < 5) # Comparar si es menor.
print(4 >= 5) # Comparar si es mayor igual.

#Operador de indentidad
entero = 100

print(entero is entero)

#Operadores Logicos

#Operador 'and'
print(True and True) # Verdadero
print(True and False) # Falso
print(False and True) # Falso
print(False and False) # Falso

#Operador 'or'
print(True or True) # Verdadero
print(True or False) # Verdadero
print(False or True) # Verdadero
print(False or False) # Falso

# CONDICIONALES

autorizada = True # o False

if autorizada:
    print('puede ingresar')
else:
    print('No puede ingresar')


entero1 = 100

if entero1 == 99:
    print('Es 99')
elif entero1 == 100:
    print('Es 100')
else:
    print('No es 99 ni 100')

#A partir de python 3.10 se añadió 'match' similar a 'switch'
color = 'verde'

match color:
    case 'verde':
        print('Exito')
    case 'amarillo':
        print('Advertencia')
    case _: # Para capturar situaciones adicionales
        print('Error')

# FUNCIONES

def sumar(primero, segundo):
    return primero + segundo

resultado_suma = sumar(3, 4)
print(resultado_suma)

def multiplicar(primero, segundo):
    print(primero * segundo) #Esta función solo imprimirá

multiplicar(entero, 2)# se imprimiran los valores en este caso

def imprimirPrimerElemento(lista):
    print(lista[0])

imprimirPrimerElemento(animales)


#Función de ordenamiento de datos.

def quicksort(lista):
    if len(lista) <= 1:
        return lista

    pivote = lista[0]
    izquierda = []
    derecha = []
    for i in range(1, len(lista)):
        izquierda.append(lista[i]) if lista[i] < pivote else derecha.append(lista[i])
    
    return quicksort(izquierda) + [pivote] + quicksort(derecha)

números = [23, 564, 789, 12, 65, 10]
listaOrdenada = quicksort(números)
print(listaOrdenada)

# BUCLES

animales1 = ['perro', 'tigre', 'elefante']
for animal in animales1:
    print(animal) # Imprimirá la lista de los animales


def multiplicar(primero, segundo):
    print(primero * segundo)

numbers = [23, 564, 789, 12, 65, 10] 

for number in numbers:
    multiplicar(number, 2) # Imprimirá los numeros pero multiplicados por el segundo valor.

#Bucle condicional

entero2 = 100
emergencia = 911

while entero2 < emergencia:
    print(entero2)
    entero2 += 1

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


# MODULOS: Permite dividir el proyectos en varios archivos para una mejor organización.

#Para este ejemplo de usarán dos archivos de python, uno llamado 'main' y otro 'modulo'

# En modulo:
def restar(a, b):
    print(a - b);

# En main:
"""
import modulo

modulo.restar(10, 6)
"""
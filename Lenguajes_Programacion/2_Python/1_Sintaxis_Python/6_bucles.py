# BUCLES

# 1. Bucle For.
animales1 = ['perro', 'tigre', 'elefante']
for animal in animales1:
    print(animal) # Imprimirá la lista de los animales


def multiplicar(primero, segundo):
    print(primero * segundo)

numbers = [23, 564, 789, 12, 65, 10]

for number in numbers:
    multiplicar(number, 2) # Imprimirá los numeros pero multiplicados por el segundo valor.

# 2. Bucle While
entero2 = 100
emergencia = 911

while entero2 < emergencia:
    print(entero2)
    entero2 += 1
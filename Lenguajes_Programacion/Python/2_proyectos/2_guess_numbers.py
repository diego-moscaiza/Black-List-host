# XD

# Importando librerias:
import random


def adivina_el_numero(x):
    print("===================")
    print(" ¡Bienvenidos al juego! ")
    print("===================")
    print("Tu meta es adivinar el número generado por la computadora.")

    numero_aleatorio = random.randint(1, x) # Numero aleatorio igual Y entre 1  y X
    predicion = 1

    while predicion != numero_aleatorio:
        # El usuario ingresa un numero:
        predicion = int(input(f"Adivina un número entre 1 y {x}: "))

        if predicion <= numero_aleatorio:
            print("Intenta otra vez. Este numero es muy pequeño.")
        elif predicion > numero_aleatorio:
            print("Intenta otra vez... Este numero esm muy grande.")

    print(f"Felicitaciones! Adivinaste el número {numero_aleatorio} correctamente.")


adivina_el_numero(20)
# Este projecto constan en que la computadora adivine el numero secreto.

# Importando librerias:
import random


def adivina_el_numero_computadora(x):
    print("========================")
    print(" ¡Bienvenidos al juego! ")
    print("========================\n")
    print(f"- Primero, ten un número en mente entre 1 y {x} para que la computadora intente adivinarlo!\n")

    #Definimos los limites de numeros entre los cuales se debe encontrará el numero secreto
    limite_inferior = 1
    limite_superior = x
    # [1, x]

    respuesta = ""

    #Ciclo para que realizace iteraciones hasta encontrar el numero:
    while respuesta != "c":
        #Generar prediccion
        if limite_inferior != limite_superior:
            prediccion = random.randint(limite_inferior, limite_superior)
        else:
            prediccion = limite_inferior # podria ser cualquier de los limites

        #Obtener una respuesta del usuario:
        respuesta = input(f"Mi prediccion es {prediccion}.\n \n Si es muy alta, ingresa (A).\n Si es muy baja, ingresa (B).\n Si es correcta, ingresa (C).\n \n Ingresa tu opción aquí: ").lower() # Con lower() convierte las letras en minusculas.

        if respuesta == "a":
            limite_superior = prediccion - 1
        elif respuesta == "b":
            limite_inferior = prediccion + 1
    print(f"La computadora adivinó tu numero correctamente!: {prediccion}")


adivina_el_numero_computadora(30)
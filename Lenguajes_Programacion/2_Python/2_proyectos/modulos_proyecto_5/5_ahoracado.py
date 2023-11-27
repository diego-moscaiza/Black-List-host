import random
import string

from palabras import palabras
from ahoracado_diagrama import vidas_diccionario_visual


def obtener_palabra_válida(palabras):
    palabra = random.choice(palabras) # seleccionar una palabra al azar de la lista

    # Si la palabra contiene un guión o un espacio, debe seguir seleccionando una palabra al azar.
    while '-' in palabra or ' ' in palabra:
        palabra = random.choice(palabras)

    return palabra.upper()


def ahoracado():
    print("==================================")
    print(" Bienvenido al juego del ahorcado ")
    print("==================================\n")

    palabra = obtener_palabra_válida(palabras)
    letras_por_adivinar = set(palabra) # conjunto de letras de la palabra que deben ser adivinadas.
    letras_adivinadas = set() # letras que el usuario ha advinado durante el juego.
    abecedario = set(string.ascii_uppercase) # conjunto de letras en el abecedario.
    numero_vidas = 7

    # Obtener respuesta del usuario mientras existan letras pendientes y al jugador le queden vidas.
    while len(letras_por_adivinar) > 0 and numero_vidas > 0:
        print(f"Te quedan {numero_vidas} vidas y has usado estas letras: {' '.join(letras_adivinadas)}.")

        # Mostrando el estado actual de la palabra que el jugador debe adivinar (por ejemplo:  H - L A)
        # Usamos el "list comprehension"
        lista_palabra = [letra
                        if letra in letras_adivinadas
                        else '-' for letra in palabra]

        # Mostrar estado del ahoracado.
        print(vidas_diccionario_visual[numero_vidas])

        # Mostrar las letras separadas por un espacio.
        print(f"Palabra: {' '.join(lista_palabra)}")

        letra_usuario = input("Escoge una letra: ").upper()

        # Si la letra escogida por el usuario está en el abecedario y no está en el conjunto de letras que ya se ha ingresado, se añade la letra al conjunto de letras ingresadas.
        if letra_usuario in abecedario - letras_adivinadas:
            letras_adivinadas.add(letra_usuario)

            # Si letra está en  la palabra, se quita la letra del conjunto de ltras pendientes por adivinar.
            # Sino esta en la palabra, se le quitará una vida.
            if letra_usuario in letras_por_adivinar:
                letras_por_adivinar.remove(letra_usuario)
                print('')
            else:
                numero_vidas = numero_vidas - 1 # numero_vidas -= 1
                print(f"\n La letra '{letra_usuario}' no está en la palabra.")

        # Si la letra escogija por el usuario ya fue ingresada
        elif letra_usuario in letras_adivinadas:
            print("\n Ya escogiste esa letra. Por favor escoge una letra nueva.")
        else:
            print("\n Esta eltra no es válida")

    # El juego llega a esta linea cuando se adivinan todas las letras de la palabra o cuando se agotan las vidas del jugador.
    if numero_vidas == 0:
        print(vidas_diccionario_visual[numero_vidas])
        print(f"Perdiste, pipipipipipipi. La palabra era '{palabra}'.")
    else:
        print(f"Felicidades, adivinaste la palabra '{palabra}'.")


ahoracado()
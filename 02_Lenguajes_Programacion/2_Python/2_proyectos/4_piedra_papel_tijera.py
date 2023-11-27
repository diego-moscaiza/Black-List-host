"""
Logica del juego "piedra, papel o tijera" o "yan, ken, po" en Python
"""
import random


def jugar():
    print("===============================================")
    print(" Bienvenido al juego de piedra, papel o tijera ")
    print("===============================================\n")

    usuario = input("- Escoge entre 'piedra, papel o tijera' para comenzar: ").lower()
    computadora = random.choice(['piedra', 'papel', 'tijera'])

    print(f"- La computadora escogió '{computadora}'.\n")

    if usuario == computadora:
        return '¡Empate!'

    if jugador_gana(usuario, computadora):
        return '¡Ganaste!'

    return '¡Perdiste!'


def jugador_gana(jugador, oponente):
    # Retornar True (verdadero) si gana el jugador.
    # Piedra gana a Tijera (pi > ti).
    # Tijera gana a Papel (ti > pa).
    # Papel gana a Piedra (pa > pi).
    if ((jugador == 'piedra' and oponente == 'tijera')
        or (jugador == 'tijera' and oponente == 'papel')
        or (jugador == 'papel' and oponente == 'piedra')):
        return True
    else:
        return False


print(jugar())

# Busqueda bianria.
# Realizaremos la comparación de la busqueda binaria con una busqueda ingenuia (naive search) que hace la busqueda elemento por elemento

import random
import time

# Algoritmo de busqueda ingenua
def busqueda_ingenua(lista, objetivo):
    for i in range(len(lista)):    # range(len(lista)) -> 0,1,2,3,.., len(lista) - 1.
        if lista[i] == objetivo:
            return i
    return -1

# mi_lista = [1, 3, 5, 10, 12]
# print(busqueda_ingenua(mi_lista, 10))


# Algoritmo de busqueda binaria.
def busqueda_binaria(lista, objetivo, limite_inferior = None, limite_superior = None):
    if limite_inferior is None:
        limite_inferior = 0 # Inicio de la lista
    if limite_superior is None:
        limite_superior = len(lista) - 1 # Fin de la lista

    if limite_superior < limite_inferior:
        return -1

    # '//' divide y devulve un valor sin decimales que no necesariamente lo redondea, solo lo trunca
    punto_medio = (limite_inferior + limite_superior) // 2

    """Buscamos desde la mitad de la lista. Esta se cuenta desde la posicion 0.
    # [1, 3, 5, 10, 11].
    #  0, 1, 2,  3, 4
    # punto_medio = (0 + 4) // 2 = 4 // 2 = 2
    # Sino:"""

    if lista[punto_medio] == objetivo:
        return punto_medio
    elif objetivo < lista[punto_medio]:
        return busqueda_binaria(lista, objetivo, limite_inferior, punto_medio - 1)
    else:
        return busqueda_binaria(lista, objetivo, punto_medio +1, limite_superior)


# Cuando queremos el que codigo se ejecute cuando no estamos importante el modulo, osea que en otro modulo no se ejecutará sino aqui mismo.

if __name__ == '__main__':
    # mi_lista = [1, 3, 5, 10, 12]
    # print(busqueda_binaria(mi_lista, 2))

    # Crear una lista ordenada com 1000 numeros aleatorios.
    tamanio = 20000
    conjunto_inicial = set()

    while len(conjunto_inicial) < tamanio:
        conjunto_inicial.add(random.randint(-3 * tamanio, 3 * tamanio))

    lista_ordenada = sorted((list(conjunto_inicial)))

    # Medir el tiempo de busqueda ingenua.
    inicio_bi = time.time()
    for objetivo in lista_ordenada:
        busqueda_ingenua(lista_ordenada, objetivo)
    fin_bi = time.time()
    print(f"Tiempo de búsqueda ingenua: {fin_bi - inicio_bi} segundos.")


    # Medir el tiempo de busqueda binaria.
    inicio_bb = time.time()
    for objetivo in lista_ordenada:
        busqueda_binaria(lista_ordenada, objetivo)
    fin_bb = time.time()
    print(f"Tiempo de búsqueda binaria: {fin_bb - inicio_bb} segundos.")
# FUNCIONES

# Definiendo variables.
entero = 100
animales = ['perro,' 'gato', 'ornitorrinco']

# 1. Funcion para suamr.
def sumar(primero, segundo):
    return primero + segundo

# - Llamado a la funcion y otorgar los parametros correspondientes.
resultado_suma = sumar(3, 4)
print(resultado_suma)

# 2. Funcion para multiplicar.
def multiplicar(primero, segundo):
    print(primero * segundo) #Esta función solo imprimirá

# - Llamado a la funcion y otorgar los parametros correspondientes.
multiplicar(entero, 2)# se imprimiran los valores en este caso

# 3. Funcion para multiplicar.
def imprimirPrimerElemento(lista):
    print(lista[0])

# - Llamado a la funcion y otorgar los parametros correspondientes.
imprimirPrimerElemento(animales)


#Función de ordenamiento de datos 'quicksort'.
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
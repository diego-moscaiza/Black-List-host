# Introducción de Python


# IMPRIMIR MENSAJES
print('Hola Mundo')

# VARIBALES
# - Elementos con un valor definido pero que puede cambiar.

# - Tipo cadena o string.
libro = 'NUEVO LIBRO'

# - Tipo numerico.
entero = 100
decimal = 3.14165467

# Booleanos (Si o No)
autorizado = True
seleccionado = False

# CONSTANTES. Elementos que no cambiaran su valor nunca.
pi = 3.1416


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
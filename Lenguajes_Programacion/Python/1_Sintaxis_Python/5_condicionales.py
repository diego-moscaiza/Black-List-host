# CONDICIONALES

# Condicional If - Else:

# - Ejemplo 1:
autorizada = True # o False

if autorizada:
    print('puede ingresar')
else:
    print('No puede ingresar')

# - Ejemplo 2:
entero1 = 100

if entero1 == 99:
    print('Es 99')
elif entero1 == 100:
    print('Es 100')
else:
    print('No es 99 ni 100')

# Condicional Match - Case:

#A partir de python 3.10 se añadió 'match' similar a 'switch'
color = 'verde'

match color:
    case 'verde':
        print('Exito')
    case 'amarillo':
        print('Advertencia')
    case _: # Para capturar situaciones adicionales
        print('Error')
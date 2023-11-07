# VARIABLES EN R.

# Objetivo: estudiar qué es una variable en R.
# ——————————————–
# En este ejercicio vamos a:
# 1. Realizar operaciones aritméticas en la consola
# 2. Asignar variables a un script en RStudio, y 
# 3. Identificar distintos tipos de datos en R


#######################################
# practica 1: operaciones aritmeticas #
#######################################

# 1. primer acertijo de redes sociales

1+1-1*(1+1-1)/1+1*(-1)

#######################################
# practica 2: asignación de variables #
#######################################

# 1. asigna los numeros a cada fruta

# - Las guías de estilo dictamina el uso de "<-" en vez de "=" para asignación de variables

mango <- 10
manzana <- 5
aguacate <- 15

# 2. resuelve el complejo acertijo

resultado <- ((2*15)+(4*5)+(1.5*10))

# 3. imprime el resultado por pantalla

resultado

##################################
# practica 3: tipos de variables #
##################################

# - Nos referimos a binarios que pueden ser:
# "numeric" (numeros), "character" (texto), "true" o "false", etc.

# 1. observa la clase del resultado
class(resultado)

# 2. crea una variable con algún nombre
nombre <- "Diego"

# 3. observa la clase del nombre
class(nombre)

# 4. es 1 mayor que 2
1 > 2

# 5. cual es la clase de "1 > 2" // Es "logical"
class(1 > 2)

# 6. sumar variables "nombre" y "resultado" // Da error.
nombre + resultado


# Hecho con gusto por Rafa @GonzalezGouveia
# Suscribete para más código en R https://bit.ly/2WNDhNR
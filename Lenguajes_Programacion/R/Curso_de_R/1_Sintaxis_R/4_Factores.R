# Factores

# - Es una estructura de datos para manejar variables categóricas.
#   Son datos que toman un cantidad finita de valores como:
#   "rangos de edades", "dias de la semana", "colores", etc.
# - Las variables categóricas, en estadística, 
#   se tratan difenrente a las variables continuas o numéricas.

# Objetivo: estudiar qué son factores en R.
# ——————————————–
# En este ejercicio vamos a:
# 1. Crear factores en R
# 2. Recodificar niveles de un factor
# 3. Ordenar niveles de un factor


#####################################
# correr esto antes de empezar…   #
#####################################

# 1. crear vector de ventas
tallas <- c('m', 'g', 'S', 'S','m', 'M')

# 2. intentar graficar
# plot(tallas). 

# - Muestra error al momento de graficas porque necesitamos crear un factor

###################################
# práctica 1: crear factores en R #
###################################

# 1. crear factor de un vector
# - Para usar la función "factor()" se necesita un vector para añadirlo como argumento o parámetro.
tallas_factor <- factor(tallas)

# 2. graficar factor
plot(tallas_factor)

# 3. mirar niveles de factor
# - Las categorias o clases de un factor se llaman niveles y con la función "levels()"
levels(tallas_factor)

######################################
# práctica 2: recodificando factores #
######################################

# 1. creando factor recodificado

# Estructura de un factor recodificado:
# factor(vector, 
#       levels = vector_niveles, # Etiqueta de niveles existentes
#       labels = vector_etiqueta) # Nueva etiqueta de niveles

tallas_recodificado <- factor(tallas,
                            levels = c("g", "m", "M", "S"),
                            labels = c("G", "M", "M", "S"))

# 2. graficando ventas_recodificado
plot(tallas_recodificado)

#############################################
# práctica 3: ordenando niveles de factores #
#############################################

# 1. ordenando niveles (copiar factor anterior)

# Estructura de un factor recodificado ordenado:
# factor(vector,
#       ordered = TRUE # Definimos con TRUE para confirmar el ordenamiento.
#       levels = vector_niveles, # Etiqueta de niveles existentes
#       labels = vector_etiqueta) # Nueva etiqueta de niveles

tallas_ordenado <- factor(tallas,
                            ordered = TRUE,
                            levels = c("S", "m", "M", "g"),
                            labels = c("S", "M", "M", "G"))

# 2. viendo el orden en los niveles

tallas_ordenado

# 3. graficando el factor ordenado
plot(tallas_ordenado)


# Listas

# - En R, las listas pueden incluir todas las demás estructuras de datos, como vectores, matrices, dataframes y otros que existen en este lenguaje.
# - También sirven para guardar los resultados por ejemplo los resultados de una regresión lineal que muestra una lista que contiene: 'coeficientes estimados', 'vectores con residuos' y etc.

# Objetivo: estudiar qué son las listas en R
# ——————————————-
# En este ejercicio vamos a:
# 1. Crear listas en R
# 2. Seleccionar elementos de una lista
# 3. Identificar listas en R

#####################################
# correr esto antes de empezar…   #
#####################################

# 1. Cargando datos de videos anteriores
# - informacion peliculas shrek. Ver video –> https://bit.ly/2LaUWbo

nombre <- c("Shrek", "Shrek 2", "Shrek Tercero", "Shrek: Felices por siempre")
puntuacion <- c(7.9, 7.2, 6.1, 6.3)
posterior_2005 <- c(FALSE, FALSE, TRUE, TRUE)

# - informacion estrenos de peliculas. Ver video –> https://bit.ly/2KDKCJE
warner <- c(20, 20, 16, 17, 17, 22, 17, 18, 19)
disney <- c(11, 13, 11, 8, 12, 11, 12, 8, 10)
fox <- c(18, 15, 15, 15, 16, 17, 15, 13, 11)

# 2. crear diferentes estructuras de datos en R
vector_titulos <- nombre
matriz_peliculas <- matrix(c(warner, disney, fox),
                    nrow = 9,
                    ncol = 3)
peliculas_df <- data.frame(nombre,
                            puntuacion,
                            posterior_2005)

####################################
# práctica 1: crear una lista en R #
####################################

# 1. crear lista en R, usando la palabra reservada 'list'
# - Estructura Lista:
# list(objeto1,
#      objeto2,
#     ...)

lista_curso <- list(vector_titulos, matriz_peliculas)

# 2. mostrar lista colocando el nombre la variable

lista_curso
# O podemos usar la función 'View()' y mostrará en una ventana aparte.

# 3. cambiar nombre de la lista con la función 'name()'

names(lista_curso) <- c("vector", "matriz")

# 4. mostrar lista (sí, otra vez)
lista_curso

##################################################
# práctica 2: Seleccionar elementos de una lista #
##################################################

# 1. Seleccionar vector de la lista 
# con doble corchete y su nombre así, '[[nombre]]' 
lista_curso[["vector"]]

# 2. Seleccionar el tercer elemento del vector de la lista
# con un corchete al costado de la variable de la lista
# y colocando la posición que deseamos, de esta forma, '[['nombre_objeto']]['numero_posicion']' 
lista_curso[["vector"]][2]

# 3. Seleccionar fila 5 y columna 3 de la matriz de la lista
lista_curso[["matriz"]][5, 3]


######################################################
# práctica 3: agregar/eliminar elementos a una lista #
######################################################

# 1. agregar dataframe a lista
# Así, lista[['nombre_objeto']] <- 'objeto'
lista_curso[["data_frame"]] <- peliculas_df

# 2. revisar que está el dataframe
lista_curso

# 3. eliminar un elemento de lista
# Asignando 'NULL' al valor así, lista_curso[["nombre_objeto"]] <- NULL
lista_curso[["vector"]] <- NULL

# 4. revisar que no está el vector
lista_curso

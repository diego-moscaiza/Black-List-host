# Matrices 

# Objetivo: estudiar qué es una matriz en R.
# ——————————————–
# En este ejercicio vamos a:
# 1. Crear matrices en un script
# 2. Realizar opraciones aritméticas con matrices
# 3. Seleccionar elementos en una matriz


#####################################
# práctica 1: creando matrices en R #
#####################################

# 1. crear vectores para las columnas de la matriz

warner <- c(20, 20, 16, 17, 17, 22, 17, 18, 19)
disney <- c(11, 13, 11, 08, 12, 11, 12, 08, 10)
fox    <- c(18, 15, 15, 15, 16, 17, 15, 13, 11)

# fuente https://www.the-numbers.com/market/

# 2. Creando matriz a partir de vectores.
# - Para las matrices se usa la función "matrix" y contiene:
# - "numeroFilas" y "numeroColumnas".

peliculas <- matrix(c(warner, disney, fox),
                    nrow = 9,
                    ncol = 3)

# 3. imprimir matriz en consola
peliculas

# 4. agregar nombres de columnas
# - Para colocar nombre especifico a la columna se usa: "colname".
# - El orden en que se inserten los nombres corresponderá al orden de las columnas.

colnames(peliculas) <- c("warner", "disney", "fox")

# 5. agregar nombres de filas/renglones
# - Para colocar nombre especifico a la fila se usa: "rowname".
# - El orden en que se inserten los nombres corresponderá al orden de las filas.

rownames(peliculas) <- c("2010", "2011", "2012", "2013", "2014",
                        "2015", "2016", "2017", "2018")

# 6. imprimir matriz por segunda vez
peliculas

####################################################
# práctica 2: operaciones aritméticas con matrices #
####################################################

# 1. resta 5 a la matriz
peliculas - 5

# 2. sumar matriz consigo misma
peliculas + peliculas

# 3. multiplicar la matriz consigo mismo
peliculas * peliculas

###################################################
# práctica 3: selección de elementos de un matriz #
###################################################
  
# 1. seleccionar un elemento de la matriz
peliculas[3, 2]
peliculas['2012', 'disney']

# 2. seleccionar más de un elemento de la matriz
# - Podemos seleccionar por el número o el nombre correspondiente de la columna.

# - Aqui el orden llamado es:
# - "declarar posición de las filas" y luego "declarar posición de las columnas".
peliculas[c(3, 4), c(2, 3)]
peliculas[c(3, 4), c("disney", "fox")]

# 3. seleccionar una fila o renglón
# - Primero va el numero de la fila y luego la coma ",".
peliculas[3, ]
peliculas["2012", ]

# 4. seleccionar una columna
# - Primero va la coma "," y luego el numero de la fila .
peliculas[, 2]
peliculas[, "disney"]

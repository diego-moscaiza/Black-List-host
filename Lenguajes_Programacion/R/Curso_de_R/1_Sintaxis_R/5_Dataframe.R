# Dataframes

# - Haremos uso de conceptos anteriomente vistos como 'variables', 'vectores' y 'matrices'.
# - Los 'dataframes' es una estructura de datos donde se utilizan diferentes tipos de variables.
# - Son importantes para gráficas, análisis y modelos con muchas variables estadísticas.


# Objetivo: estudiar qué son dataframes en R.
# ——————————————–
# En este ejercicio vamos a:
# 1. Crear dataframes en R
# 2. Ordenar dataframes por columnas
# 3. Seleccionar elementos de un dataframe

#####################################
# correr esto antes de empezar…   #
#####################################

# 1. vectores sobre peliculas de Shrek
nombre <- c("Shrek", "Shrek 2", "Shrek Tercero", "Shrek: Felices por siempre")
puntuacion <- c(7.9, 7.2, 6.1, 6.3)
posterior_2005 <- c(FALSE, FALSE, TRUE, TRUE)

#######################################
# práctica 1: crear un dataframe en R #
#######################################

# 1. crear dataframe de vectores

# - Usando 'vecrores' es una fomra de crear los 'dataframes'.
# - Se llama a los vectores dentro del parámetro del 'dataframe'.

peliculas_df <- data.frame(nombre,
                            puntuacion,
                            posterior_2005)

# 2. mostrar dataframe
peliculas_df

# 3. cambiar nombre de dataframe

names(peliculas_df) <- c("NOMBRE",
                        "PUNTUACION",
                        "POSTERIOR_2005")

# 4. mostrar dataframe (sí, otra vez)
peliculas_df

#####################################################
# práctica 2: Seleccionar elementos de un dataframe #
#####################################################

# 1. seleccionar un elemento del dataframe
# - Lo podemos llamar por numero de posición de la columna o por nombre de la columna .

peliculas_df[3, 2]
peliculas_df[3, "PUNTUACION"]

# 2. seleccionar más de un elemento del dataframe

peliculas_df[c(3, 4), c(2, 3)]
peliculas_df[c(3, 4), c("PUNTUACION", "POSTERIOR_2005")]

# 3. seleccionar una fila o renglón del dataframe ("poniendo la COMA al FINAL")
peliculas_df[3, ]

# 4. seleccionar una columna del dataframe ("poniendo la COMA al INICIO")
peliculas_df[, 2]
peliculas_df[, "PUNTUACION"]

# - Aqui otra alternativa para llamar a la columna por su nombre.
peliculas_df$PUNTUACION


#################################
# práctica 3: ordenar dataframe #
#################################

# 1. mostrar el dataframe
peliculas_df

# 2. mostrar el indice de la columna de puntuacion con order
order(peliculas_df$PUNTUACION)

# 3. funcion order (menor a mayor)

orden_menor_mayor <- order(peliculas_df$PUNTUACION,
                           decreasing = FALSE)

# 4. mostrar el dataframe ordenado
peliculas_df[orden_menor_mayor, ]

# 5. funcion order (mayor a menor)

orden_mayor_menor <- order(peliculas_df$PUNTUACION,
                            decreasing = TRUE)

# 6. mostrar el dataframe ordenado
peliculas_df[orden_mayor_menor, ]

# 7. guardar el dataframe ordenado
df_ordenado <- peliculas_df[orden_mayor_menor, ]

# **Introducción del lenguaje R**

## ¿Qué es R?
R es un lenguaje de programación diseñado para hacer análisis estadísticos y gráficas. Este lenguaje es software libre.
La curva de aprendizaje es relativamente sencilla y tiene una comunidad de programadores internacional.

## Entornos de desarrollo.
Existe un IDE llamado "RStudio" y se puede usar "Visual Studio Code" con extensiones.

## Uso de R
Se pueden realizar modelos estadísticos como: "regresión lineal", "redes neurnales"; también "modelos de series de tiempo", "visualización anidada", gráficas, etc.

## Profesionales que usan R.
Cualquier persona puede hacer uso de este lenguaje para realizar análisis estadísticos pero quienes normalmente lo usan son: Investigadores científicos, profesores, estudiantes, analísticas financieros, actuarios, economistas.

## ¿Qué es un script?
Es un documento de texto donde se escriben lineas de código de R para estructurar nuestro anlásis de datos. Definimos funciones que sirven para leer, limpiar y visualizar los datos en R.

## Sintaxis de R
```R
# Cálculos matemáticos:
1032 / 34 # Salida: 30.35294.
pi # Salida: 3.141593

# Arreglo o lista
# "mean" significa "media", o sea es el resultado de "sumaNumeros" / "totalNumeros".
# 'c' significa lista en R.
mean(c(1, 2, 3, 4, 5, 6)) # Salida: 3.5

airquality # Muestra datos de la calidad del aire.
head(airquality) # Muestra los 6 primeros datos de cualquier cosa.

# Asignación de variables:
# Usamos "<-" para asignar valor a una variable.

# En este caso le asignamos un valor "x" al arreglo del costado.
x <- c(1, 2, 3, 4, 5, 6)

# Asignamos "airquality" a la variable "datos".
datos <- airquality

# Visualizamos los datos.
view(datos)

# Obtenemos la media del valor "x"
mean(x) # Salida: 3.5

# La función "plot" sirve para visualizar los datos en una gráfica.
plot(datos)

# La función "hist" sirve para represetnar datos en gráficos de barras.
hist(datos$Ozone)
```

> Lista de reprodcucción del curso en youtube: [CURSO DE R](https://www.youtube.com/watch?v=k3tiNvTmug8&list=PLbDLkhJ5sFvCWFbP4tAFALHkNWNFo_FiL&index=1&ab_channel=RafaGonzalezGouveia).

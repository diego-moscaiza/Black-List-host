Algoritmo VectorDinamico_NumeroMayor
	Dimension datos[4]
	Definir i, j, z, buscar Como Entero
	Definir mayor1, posicion Como Entero
	mayor1 <- -192000
	
	//PROCESO PARA CAPTURA DE DATOS Y ALMACENAMIENTO EN EL VECTOR
	Para i = 0 Hasta 3 Con Paso 1 Hacer
		Escribir "Digite un valor para la posicion: ", i + 1
		Leer datos[i]
	FinPara
	
	Para i = 0 Hasta 3 Con Paso 1 Hacer
		Si (datos[i] > mayor1) Entonces
			mayor1 = datos[i]
			posicion = i + 1
		FinSi
	FinPara
	
	Escribir "El mayor numero es: ", mayor1, " y está en la posicion: ", posicion	
FinAlgoritmo

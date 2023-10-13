Algoritmo VectorEstatico_NumeroMayor
	Dimension number[5]
	Definir mumeroMayor, posicion Como Entero
	mumeroMayor <- -192000
	
	number[0] = 15
	number[1] = 20
	number[2] = 24
	number[3] = 50
	number[4] = 6
	
	Para i <- 0 Hasta 4 Con Paso 1 Hacer
		Si (number[i] > mumeroMayor) Entonces
			mumeroMayor = number[i]
			posicion = i
		FinSi
	FinPara
	
	Escribir "El mayor numero es: ", mumeroMayor, " y está en la posicion: ", posicion
FinAlgoritmo

Algoritmo SumaDeMatrices
	Dimension A[3, 3], B[3, 3], C[3, 3]
	
	
	Para i <- 0 Hasta 2 Hacer
		Para j<-0 Hasta 2 Hacer
			A[i, j] <- Azar(10)
			B[i, j] <- Azar(10)
			contador <- contador + 1
			Escribir "Numeros de la fila " contador " de A: ",A[i, j]
			Escribir "Numeros de la fila " contador " de B: ",B[i, j]
		Fin Para
	Fin Para
	
	Para i <- 0 Hasta 2 Hacer
		Para j<-0 Hasta 2 Hacer
			C[i, j] <- A[i, j] + B[i, j]
		FinPara
	Fin Para
	
	Para i <- 0 Hasta 2 Hacer
		Para j<-0 Hasta 2 Hacer
			Escribir C[i, j], ""
		FinPara
	Fin Para
	
FinAlgoritmo
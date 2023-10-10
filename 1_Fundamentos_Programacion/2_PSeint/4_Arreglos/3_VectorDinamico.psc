Algoritmo VectorDinamico
	Dimension datos[4]
	Definir i Como Entero
	Escribir "El vector solo soporta 4 posiciones: "
	
	//PROCESO PARA CAPTURA DE DATOS Y ALMACENAMIENTO EN EL VECTOR
	Para i = 0 Hasta 3 Con Paso 1 Hacer
		Escribir "Digite un valor para la posicion: ", i + 1
		Leer datos[i]
	FinPara
	
	Escribir "El vector esta compuesto por los numeros: [",datos[0],", ",datos[1],", ",datos[2],", ",datos[3],"]."
FinAlgoritmo

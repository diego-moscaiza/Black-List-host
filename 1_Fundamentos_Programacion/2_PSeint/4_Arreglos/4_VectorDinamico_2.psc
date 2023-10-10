Algoritmo VectorDinamico_2
	Dimension datos[4]
	Definir i, j, z, buscar Como Entero
	
	//PROCESO PARA CAPTURA DE DATOS Y ALMACENAMIENTO EN EL VECTOR
	Para i = 0 Hasta 3 Con Paso 1 Hacer
		Escribir "Digite un valor para la posicion: ", i + 1
		Leer datos[i]
	FinPara
	
	// PROCESO PARA MOSTRAR E IMPRIMIR LOS DATOS QUE HAY EN EL VECTOR
	Para j = 0 Hasta 3 Con Paso 1 Hacer
		Escribir "El valor guardado en la posicion: ",j + 1," es: ", datos[j]
	FinPara

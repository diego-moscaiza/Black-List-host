Algoritmo VectorDinamico_BuscarPosicion
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
	
	Escribir "Ingrese el dato a BUSCAR en el vector: "
	Leer buscar
	
	// PROCESO PARA BUSCAR E IMPRIMIR EL DATO INGRESADO
	Para z = 0 Hasta 3 Con Paso 1 Hacer
		Si buscar = datos[z] Entonces
			Escribir "El valor guardado esta en la posicion: ", z + 1
		SiNo
			Escribir "El valor colocado NO esta en niguna posicion del vector"
		FinSi
	FinPara
FinAlgoritmo
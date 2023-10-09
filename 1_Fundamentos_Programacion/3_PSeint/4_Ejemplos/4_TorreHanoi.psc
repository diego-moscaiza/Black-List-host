//Esta funci�n implementa la recursi�n para mover un grupo de n discos 
//desde el poste Origen hasta El poste destino con ayuda del poste Intermedio

Funcion MoverTorre(Origen, Destino, Intermedio, n)
	Si n > 0 Entonces
		MoverTorre(Origen, Intermedio, Destino, n-1)
		Escribir 'Mover disco de la posici�n ', Origen, ' hasta la posici�n ', Destino
		MoverTorre(Intermedio, Destino, Origen, n-1)
	Fin Si
Fin Funcion

Algoritmo TorreHanoi
	Escribir "�Con cuantos discos desea usted ver la soluci�n del problema de las torres de Hanoi?"
	Leer cantidadDiscos
	MoverTorre(1,3,2,cantidadDiscos)
FinAlgoritmo
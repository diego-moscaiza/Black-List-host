Algoritmo Ciclo_SwitchCase
	Escribir "Seleccione: "
	Escribir "(1) Saludo"
	Escribir "(2) Prueba" 
	Escribir "(3,4) Nada"
	Escribir "(Otro numero) Cerrar"
	Escribir Sin Saltar "Escribe el numero"
	Leer numeroSeleccionado
	
	Segun numeroSeleccionado Hacer
		1:
			Escribir "Hola, ¿Como estas?"
			Leer saludoUsuario
			Escribir "Presiona cualquier tecla para cerrar"
		2:
			Escribir "Esto es una prueba"
			Escribir "Presiona cualquier tecla para cerrar"
		3, 4:
			Escribir "No hay mensaje"
			Escribir "Presiona cualquier tecla para cerrar"
			
		De Otro Modo:
			Escribir "Presiona cualquier tecla para cerrar"
	Fin Segun
FinAlgoritmo

// Este Algoritmo contara hasta el numero ingresado pero sin imprimir los impares
Algoritmo Contador_2
	Definir numero1 Como Entero
	Escribir 'Ingresa un n�mero: '
	Leer numero1
	
	Para i <- 0 Hasta numero1 Con Paso 1 Hacer
		Si i mod 2 = 0 Entonces
			Escribir i
		Fin Si
	Fin Para
FinAlgoritmo
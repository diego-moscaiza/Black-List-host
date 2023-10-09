Funcion jugar
	numeroAzar <- azar(100)
	intento <- 0
	switch <- 0
	
	Escribir "Ingrese un número entre 1 y 100: "
	
	Mientras switch = 0 Hacer
		intento <- intento + 1
		Leer numeroIngresado
		
		Si numeroIngresado = numeroAzar Entonces
			switch <- 1
		SiNo
			Si numeroIngresado < numeroAzar Entonces
				Escribir "El numero esta por debajo"
				Escribir "Intente denuevo"
			SiNo
				Escribir "El numero esta por encima"
				Escribir "Intente denuevo"
			Fin Si
		Fin Si
	Fin Mientras
	
	Escribir "Perfecto!, adivinó el numero en ", intento, " intentos"
Fin Funcion

Algoritmo NumeroMagico
	jugar
FinAlgoritmo

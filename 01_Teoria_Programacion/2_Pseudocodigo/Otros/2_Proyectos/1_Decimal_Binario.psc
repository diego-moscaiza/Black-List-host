// EL ALGORITMO DEMUESTRA EL VALOR DE UN NUMERO EN BINARIO, Y FILTRA NUMEROS CON DECIMALES
Algoritmo Decimal_Binario
	Escribir "Ingresa un numero: "
	Leer numero1
	numero1 <- TRUNC(numero1)
	cad <- ""
	
	Si numero1 = 0 Entonces
		Escribir "El numero es: ", numero1
	Fin Si
	
	Si numero1 < 0 Entonces
		Escribir "No se convierten numeros negativos"
	Fin Si
	
	Si numero1 > 0 Entonces
		Mientras numero1 > 0 Hacer
			NumeroPar <- numero1 MOD 2
			
			Si NumeroPar = 0 Entonces
				cad <- "0" + cad
			SiNo
				cad <- "1" + cad
			Fin Si
				
			numero1 <- TRUNC(numero1 / 2)
		Fin Mientras
		
		Escribir "El numero en binario es: ", cad
	Fin Si
FinAlgoritmo

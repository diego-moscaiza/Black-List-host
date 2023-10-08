Algoritmo sin_titulo
	Escribir "Ingresa un numero: "
	Leer numero1
	numero1 <- TRUNC(numero1)
	cad <- ""
	Si numero1 > 0 Entonces
		Mientras numero1 > 0 Hacer
			NumeroPar <- numero1 MOD 2 = 0
			Si numero1=0 Entonces
				Escribir ""
			SiNo
				Escribir ""
			Fin Si
		Fin Mientras
	SiNo
		Escribir ""
	Fin Si
FinAlgoritmo

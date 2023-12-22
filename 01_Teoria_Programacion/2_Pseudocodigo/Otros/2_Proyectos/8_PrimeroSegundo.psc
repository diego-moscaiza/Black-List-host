Algoritmo PrimeroSegundo
	Definir numero1, numero2 Como Entero
	Escribir 'Ingresa dos números: '
	Leer numero1, numero2
	
	Si numero1 > numero2 Entonces
		Escribir 'El primer número es mayor que el segundo número'
	SiNo
		Si numero2 > numero1 Entonces
			Escribir 'El segundo número es mayor que el primer número'
		SiNo
			Escribir 'Los números son iguales'
		Fin Si
	Fin Si
FinAlgoritmo
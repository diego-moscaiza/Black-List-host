Funcion Mensaje
	Escribir "Hola mundo";
FinFuncion

Funcion Suma(num1, num2)
	Escribir "El valor de la suma es: ", num1 + num2
FinFuncion


Proceso Funciones
	Mensaje();
	
	Definir numero_1, numero_2 Como Real
	
	Escribir "Ingrese 2 numeros: "
	Leer numero_1
	Leer numero_2
	
	Suma(numero_1, numero_2);
FinProceso

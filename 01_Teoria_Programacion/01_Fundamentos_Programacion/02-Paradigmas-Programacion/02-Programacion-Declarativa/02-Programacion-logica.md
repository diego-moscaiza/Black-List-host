# 2. Programación lógica

La programación lógica se entiende como el mecanismo donde el usuario debe hacerse cargo de programar el ordenador para que sea capaz de tomar decisiones propias basándose en los postulados y parámetros de la lógica matemática.

Se basa en la lógica de primer orden o cálculo de predicados o sea la relación entre elementos y se caracteriza por concebir un programa como una colección de hechos (verdades) y reglas.

Los programas lógicos suelen usarse para la inferencia o deducción de la información; por ejemplo: para simular el razonamiento de la inteligencia artificial, o sea que se debe interpretar o entender la información otorgada para dar una respuesta.

Las características que definen al paradigma de programación lógica son los siguientes:

**1. Variables lógicas** 
Son variables que pueden actuar como variables de entrada y también de salida.

```prolog
%% Ejemplo:
arbol(palmera)
vegetal(x):- arbol(x)

vegetal(perro) > False %% Entrada.
vegetal(x) > palmera %% Salida.
```

**2. Iversibilidad**
Permiten usar un predicado para extraer información o para validarlo

```prolog
?arbol(palmera) %% Nos dice si una palmera es un árbol.
?arbol(x) %% Nos dice todos los árboles que hay.
```

**3. SDL-resolucion**
El mecanismo de inferencia que utiliza la programación lógica es "SDL-resolucion". Consiste en crear un árbol de búsqueda que explora todas las posibles respuestas.

```prolog
padre(juan, luis)
padre(luis, ana)

abuelo(x, y):- padre(x,z), padre(z, y)
%% En este caso si la Z vale luis "{Z/Luis} es cierto!".
```

**4. Recursividad** 
No existe los bucles iterativos como *for*, *while*, *do*. Solo se usa la recursividad, o sea una función que se llama a si misma y en esta debe haber una condición de terminación.

```prolog
%% Ejemplo de recursividad
long factorial (long n) {
	if (n==0)
		return 1;
	return n * factorial (n-1); %%Aqui se realiza la recursividad
}

%% Ejecucióm:

factorial(3)
%% Primera llamada:
=> 3 * factorial(2)
->  3 * '2' = 6

%% Segunda llamada:
=> 2 * factorial(1)
->  2 * "1" = '2'

%% Tercera llamada:
=> 1 * factorial(0)
->  1 * 1 = "1"

%% Cuarta llamada:
1 %% Condición de salida
```

**5. Múltiples soluciones** 
El mecanismo conocico como "backtracking" permite que la invocación a un predicado devuelva múltiples soluciones, una por cada rama de éxito en el árbol de resolución SLD.

```prolog
%% Programa lógico
arbol(palmera)
arbol(nogal)
flor(margarita)

> arbol(x)
> palmera;
> nogal;
> false %% ya no se entrega más soluciones.
```

# Operadores

## 1. Operadores aritméticos

Los operadores aritméticos son los símbolos utilizados en la aritmética para representar operaciones matemáticas como la suma, resta, multiplicación y división. Los valores a los cuales se aplican esos operadores reciben el nombre de operandos.

```python
# Ejemplos:

suma = 10 + 100

resta = 79 - 12

multiplicacion = 70 * 10 # Resultado: 700

division = 90 / 5 # Resultado: 18

modulo = 24 % 2 # Resultado: 0
# El modulo es el resto o residuo de una división.

division_entera = 90 // 7 # Resultado: 12 con resto 6 (12 y 6/7)
# La división entera se dice cuando su resto es distinto de cero.

exponenciacion = 90 ** 3 # Resultado: 729.000
```

### Jerarquía de operaciones

Cuando se presentan operaciones aritméticas combinadas, la jerarquía determina el orden con el que deben realizarse esas operaciones. No se debe olvidar de que se siempre se resuelve de izquierda a derecha.

1. **Paréntesis**: Lo primero que se realiza en una operación es lo que está dentro de los paréntesis. Hay otros símbolos como `corchetes` y `llaves`  y su orden es: primero los paréntesis, seguido de corchetes y al final las llaves.
<br>
2. **Potencia y raíz**: Las potencias o exponenciaciones y las raíces se resuelven en segundo lugar.
<br>
3. **Multiplicación y división**: Si en la operación se encuentran los anteriores puntos, este se resuelve en tercer y penúltimo lugar.
<br>
4. **Suma y resta**: En la jerarquía se resuelven al ultimo lugar.
<br>

**Ejecución de una operación combinada con Python:**

```python
operacion_combinada = 14 / (3 + 4) + 9 - 10 / 2
print(operacion_combinada)
```

## 2. Operadores comparativos

Los operadores de comparación también conocidos como relacionales, comparan sus operandos. Se utilizan para comparar, probar o evaluar la relación entre diferentes valores.

```python
# '==' compara tanto en valor como el tipo de dato.
print(4 == 4) # True.
print(4 == '4') # False.

# '!=' si NO son iguales, tanto en valor como tipo de dato
# '!' sirve para indicar una negación.
print(4 != 5) # True.

# Usamos los operadores '<', '>', '<=', '>='.
print(4 < 5) # True.
print(4 > 5) # False.
print(4 >= 5) # True.
print(4 <= 5) # False.
```

## 3. Operadores Lógicos

Los operadores lógicos se usan para combinar dos valores Booleanos y devolver un resultado verdadero, falso o nulo. Los operadores lógicos también se denominan operadores Booleanos. Devuelve True cuando `Expresión1` y `Expresión2` son verdaderas.

```python
# Operador 'and'
print(True and True) # Verdadero
print(True and False) # Falso
print(False and True) # Falso
print(False and False) # Falso

# Operador 'or'
print(True or True) # Verdadero
print(True or False) # Verdadero
print(False or True) # Verdadero
print(False or False) # Falso

# Operador 'not'
print(not True) # Devuelve 'False'.
print(not False) # Devuelve 'True'.
```

## 4. Operadores Especiales

En los lenguajes de programación existen operadores que normalmente no se ven en los ejercicios de matemática, a continuación, se mostrarán unos cuantos.

**Operadores de asignación**

- Asignación simple `(=)`:
`x = y`
<br>

- Asignación de negación `(!=)`:
`x != y`. Niega que el valor de la izquierda es igual al de la derecha.
<br>

- Asignación de adición `(+=)`:
`x += 3`. Equivalente: `x = x + 3`
<br>
- Asignación de sustracción `(-=)`:
`x -= 3`. Equivalente: `x = x - 3`
<br>

- Asignación de multiplicación `(*=)`:
`x *= 3`. Equivalente: `x = x * 3`
<br>

- Asignación de división `(/=)`:
`x /= 3`. Equivalente: `x = x / 3`
<br>

- Asignación de módulo `(%=)`:
`x %= 3`. Equivalente: `x = x % 6`
<br>

**Operadores a nivel de bit**

- Asignación de desplazamiento a la izquierda `(<<=)`:
`x <<= 1`. Equivalente: `x vale 12`
<br>

- Asignación de desplazamiento a la derecha `(>>=)`:
`x >>= 3`. Equivalente: `x vale 3`
<br>

- Asignación de AND `(&=)`:
`x &= 1`. Equivalente: `x vale 0`
<br>

- Asignación de OR `(|=)`:
`x |= 1`. Equivalente: `x vale 7`
<br>

- Asignación de XOR u OR exclusivo `(^=)`:
`x ^= 1`. Equivalente: `x vale 7`

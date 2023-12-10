/* Operadores */
package Paquete;


public class Main {

    public static void main(String[] args) {

        // 1. Operadores Aritméticos
        
        System.out.println(1 + 3); // Suma
        System.out.println(4 - 2); // Resta
        System.out.println(10 * 3); // Multiplicacion
        System.out.println(30 / 3); // Division
        System.out.println(30 % 3); // Residuo o modulo

        // 2. Operadores Comparativos

        System.out.println(4 == 4); // Igual que
        System.out.println(4 != 4); // Diferente
        System.out.println(4 > 4); // Mayor
        System.out.println(4 < 4); // Menor
        System.out.println(4 >= 4); // Mayor igual que
        System.out.println(4 <= 4); // Menor igual que

        // 3. Operadores Lógicos

        // - Operador AND (&&)
        System.out.println(true && true); // Verdadero
        System.out.println(true && false); // Falso
        System.out.println(false && true); // Falso
        System.out.println(false && false); // Falso

        // - Operador OR (||)
        System.out.println(true || true); // Verdadero
        System.out.println(true || false); // Verdadero
        System.out.println(false || true); // Verdadero
        System.out.println(false || false); // Falso

        // - Operador NOT (!)
        System.out.println(!true); // Falso
        System.out.println(!false); // Verdadero
    }

}
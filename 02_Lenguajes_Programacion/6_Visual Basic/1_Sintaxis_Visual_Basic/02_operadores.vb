Module 3_operadores_expresiones

    Sub OperadoresAritmeticos()
        Dim suma As Integer = 8 + 3
        Dim resta As Integer = 8 - 3
        Dim multiplicacion As Double = 8 * 3
        Dim division As Double = 8 / 3
        Dim modulo As Double = 8 Mod 3

        Dim operMasIgual As Integer = 12
        operMasIgual += 3 ' Salida: 15. - Procedimiento: operMasIgual = operMasIgual + 3

        Dim operMenosIgual As Integer = 12
        operMenosIgual -= 3 ' Salida: 9. - Procedimiento: operMenosIgual = operMenosIgual - 3

        Console.WriteLine(suma)
    End Sub


    Sub OperadoresComparativos()
        Dim opIgual As Boolean = (3 = 3) ' True
        Dim opMayor As Boolean = 14 > 2 ' True
        Dim opMenor As Boolean = 14 < 2 ' False
        Dim opMayorIgual As Boolean = 14 >= 14 ' True
        Dim opMenorIgual As Boolean = 14 <= 2 ' False

        Console.WriteLine(opMayor)
    End Sub

    Sub OperadoresLogicos()
        Dim opAnd As Boolean = (7 > 4) And (3 > 6) ' False. Con And Se deben de cumplir ambos.
        Dim opOr As Boolean = (7 > 4) Or (3 > 6) ' True. Con Or Se debe cumplir al menos una condicion.
        Dim opNot As Boolean = Not (7 > 4) ' False. Con Not niega la afirmacion declarada.
    End Sub

End Module
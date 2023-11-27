' Tipos de datos
Module 2_tipos_datos

    Sub Main()
        ' Visual Basic no es "Case Sensitive" por lo que las variables con nombres iguales pero con letras en mayuscula se detectarán como iguales.

        ' Todos los atributos se les puede definir el nivel de acceso como: Public, Private, Protected, Friend y otras.

        ' - Variables

        ' 1. Tipo Cadena o Texto (String, Char)

        ' Char solo permite almacenar un (1) solo caracter.
        Public Dim letra As Char = "z"

        'Dim cadena As String = "Hola"
        Dim texto As String
        texto = "Hola"

        ' 2. Tipo Enteros (Integer)

        'Dim numero As Integer = 12
        Dim numero As Integer
        numero = 12

        numero = 5 ' Cambiando el valor de la variable

        ' 3. Tipo Double (Decimales)
        Dim centimetros As Double = 23.76

        ' 4. Buleanos (Boolean)

        Dim terminado As True

        ' - Constantes. No se puede cambiar el valor de una constante.

        Const pulgadas As Double = 12.5
        'pulgadas = 15.6 ' Error.

    End Sub


    ' Alcance de las variables.

    ' - Variable con alcance global, o sea que se puede acceder a ella en cualquier función dentro del modulo.
    Dim numero2 As Integer = 400

    Sub otroMetodo()

        ' Variable con alcance local. No se puede acceder desde otro proceso
        Dim numero2 As Integer = 400

    End Sub

    Sub otroMetodo1()

        numero2 ' Si la variable es global, se podrá acceder a ella pero si es local en otro proceso mostrará error.

    End Sub

End Module
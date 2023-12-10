'Al incio del codigo de cada modulo de Visual Basic debe ir la palabra Module con el nombre del archivo.'
Module 1_introduccion

    'El procedimiento Sub realiza una tarea y luego devuelve el control al código de llamada, pero no devuelve un valor al código de llamada. Puede tomar argumentos, como constantes, variables o expresiones que se pasan por un procedimiento de llamada.'
    Sub Main()
        ' Impresion en consola'
        Console.WriteLine("Hola Visual Basic!")

        'Con la funcion ReadKey() podemos definir que el proceso termine cuando se pulse alguna tecla.'
        Console.ReadKey(True)
    End Sub

    Sub Variables()

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

    Sub OtroMetodo()

        ' Variable con alcance local. No se puede acceder desde otro proceso
        Dim numero2 As Integer = 400

    End Sub

    Sub OtroMetodoMas()

        numero2 ' Si la variable es global, se podrá acceder a ella pero si es local en otro proceso mostrará error.

    End Sub



End Module
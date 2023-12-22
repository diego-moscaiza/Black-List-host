Module 06_funciones

    ''' Funcion que retorna una suma
    Public Function AddNumbers(num1 As Integer, num2 As Integer) As Integer
        Return num1 + num2
    End Function

    ' Llamando a funcion que retorna una suma
    Dim total As Integer = AddNumbers(5, 8) 'el total será igual a 13


    '''' Funcion de una operacion factorial
    Function Factorial(ByVal num As Integer) As Integer
        If num = 0 Then
            Factorial = 1
        Else
            Factorial = num * Factorial(num - 1)
        End If
    End Function

    '''' Funcion para evaluar si el numero es primo
    ' NOTA: 'ByVal' se usa para capturar un dato que se vaya ingresar como argumento del parámetro.
    Function IsPrime(ByVal num As Integer) As Boolean
        If num <= 1 Then
            IsPrime = False
        ElseIf num <= 3 Then
            IsPrime = True
        ElseIf num Mod 2 = 0 Or num Mod 3 = 0 Then
            IsPrime = False
        Else
            Dim i As Integer
            For i = 5 To Math.Sqrt(num) Step 6
                If num Mod i = 0 Or num Mod (i + 2) = 0 Then
                    IsPrime = False
                    Exit For
                End If
            Next
        End If
    End Function

    ''' Funciones de procedimiento:
    ' - Son funciones que pueden devolver un valor al programa que llama. Pueden realizar una serie de operaciones y devolver un valor. Las funciones procesales pueden denominarse por su nombre.
    Function AddNumbers(ByVal num1 As Integer, ByVal num2 As Integer) As Integer
        AddNumbers = num1 + num2
    End Function


    ''' Funciones del operador:
    ' - Son funciones que se invocan cuando se utiliza un operador en particular. Las funciones del operador permiten al programador ampliar la funcionalidad de los operadores existentes.

    Function +(ByVal num1 As Integer, ByVal num2 As Integer) As Integer
        + = num1 + num2
    End Function

    '''' Funciones compartidas:
    ' - Son funciones que se pueden llamar a nivel de clase sin crear una instancia de la clase. Las funciones compartidas son de naturaleza estática.

    Class MathOperations
        Public Shared Function SubtractNumbers(ByVal num1 As Integer, ByVal num2 As Integer) As Integer
            SubtractNumbers = num1 - num2
        End Function
    End Class

    '''' Funciones genéricas:
    ' - Son funciones que pueden operar en una variedad de tipos, no solo en un tipo específico. Las funciones genéricas permiten la creación de funciones más flexibles y reutilizables.

    Function Swap(Of T)(ByRef value1 As T, ByRef value2 As T)
        Dim temp As T = value1
        value1 = value2
        value2 = temp
    End Function

    '''' Funciones Lambda:
    ' - Son funciones anónimas que se definen en línea. Las funciones Lambda se pueden utilizar en programación funcional y consultas LINQ.

    Dim square = Function(x As Integer) x * x

    '''' Funciones de iterador:
    ' - Son funciones que devuelven una colección de valores, uno a la vez. Se pueden utilizar con la instrucción For Each...Next para iterar sobre una colección de elementos.

    Function GetEvenNumbers(ByVal limit As Integer) As IEnumerable(Of Integer)
        For i As Integer = 2 To limit Step 2
            Yield i
        Next
    End Function

    '''' Funciones de conversión:
    ' - Son funciones que se utilizan para convertir el tipo de datos de una variable o constante de un tipo de datos a otro.

    Function CInt(ByVal Value As Object) As Integer
        If IsNumeric(Value) Then
            CInt = Integer.Parse(Value.ToString())
        Else
            Throw New InvalidCastException("Conversion from Object to Integer is not valid.")
        End If
    End Function


    ' Funciones integradas: son funciones predefinidas por el tiempo de ejecución de Visual Basic y que están disponibles para su uso en su código. Los ejemplos incluyen MsgBox, Date, TimeOfDay y UBound.

End Module
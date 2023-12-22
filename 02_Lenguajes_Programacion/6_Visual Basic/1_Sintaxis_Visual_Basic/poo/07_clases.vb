Module 07_clases

    Public Class PersonClass
        ' Variable privada para almacenar la edad de la persona.
        Private _age As Integer

        ' Propiedad para obtener y establecer la edad de la persona.
        Public Property Age() As Integer
            Get
                Return _age
            End Get
            Set(ByVal value As Integer)
                If value > 0 Then
                    _age = value
                Else
                    Throw New ArgumentException("Age must be greater than zero.")
                End If
            End Set
        End Property

        ' Método para mostrar la edad de la persona..
        Public Sub DisplayAge()
            Console.WriteLine("The person's age is " & Age & ".")
        End Sub
    End Class

End Module
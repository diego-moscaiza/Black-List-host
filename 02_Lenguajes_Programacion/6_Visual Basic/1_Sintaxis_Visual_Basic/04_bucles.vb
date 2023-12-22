Module 4_bucles

    '''' Bucles

    ' - Bucle For


    Sub ForSample1()
        Dim number As Integer

        For number = 1 To 10
            Console.WriteLine($"Number is {number}")
        Next
    End Sub


    Sub ForSample2()
        'Dim intList As New List(Of Integer)()
        Dim intList As New List(Of Integer) From {1, 2, 3, 4, 5}
        intList.Add(6)

        For Each num In intList
            Console.WriteLine(num)
        Next

    End Sub



    ' - Bucle While

    Sub WhileSample1()
        Dim counter As Integer = 1

        While counter <= 5
            Console.WriteLine("Counter: " & counter)
            counter += 1

            If counter = 3 Then
                Exit While
            End If
        End While
    End Sub

    Sub WhileSample2()
        Dim array As Integer() = {1, 2, 3, 4, 5}
        Dim index As Integer = 0

        While index < array.Length
            Console.WriteLine($"Element at index {index} : " & array(index))
            index += 1
        End While
    End Sub

End Module
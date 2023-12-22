Module 5_listas

    ' - Listas.

    Sub Lista1()
        Dim intList As New List(Of Integer)()

        intList.Add(1)
        intList.Add(2)
        intList.Add(3)
        
        
        '''' intList.Remove(2) 'Elimina el numero 2 de la lista
        '''' intList.RemoveAt(2) 'Elimina el indice 2 de la lista

        'El método AddRange para agregar varios elementos a la vez
        Dim anotherIntList As New List(Of Integer) From {7, 8, 9}
        intList.AddRange(anotherIntList)

        For Each num In intList
            Console.WriteLine(num)
        Next

    End Sub


    Sub Lista2()
        Dim listOfItems As New List(Of String) From {"Item1", "Item2", "Item3"}

        For Each item As String In listOfItems
            Console.WriteLine(item)
        Next

        Dim secondItem As String = listOfItems(1) 'Accede al segundo elemento de la lista.
    End Sub


    ' - Diccionarios.

    Sub Diccionario()
        Dim myDictionary As New Dictionary(Of String, Integer)

        myDictionary.Add("One", 1)
        myDictionary.Add("Two", 2)
        myDictionary.Add("Three", 3)

        Dim value As Integer = myDictionary("One") ' Se puede obtener el valor de una llave
        Console.WriteLine(value)

        myDictionary.Remove("Two")

        'El método "ContainsKey()" se puede utilizar para comprobar si existe una clave en el Diccionario:
        Dim exists As Boolean = myDictionary.ContainsKey("One")
        Console.WriteLine(exists)


    End Sub

End Module
Module 4_condicionales

    '''' Condicionales.

    ' - If, Else - ElseIf.

    Sub IfSample1()
        '''' Ejercicio 1:
        ' - Realizar un programa que muestre por consola si un estudiante con el dinero que tiene ahorrado puede pagar la universidad y estudiar, teniendo en cuenta que el semetre del programa que estudia tiene un valor de 600.

        Dim estudia As Boolean = False

        ' Con la función Console.Write no hay salto de linea
        Console.Write("Ingresa el dinero ahorrado: ")
        Dim dineroAhorrado As Double = Console.ReadLine()

        If dineroAhorrado >= 600 Then
            estudia = True
        End If


        If estudia = True Then
            Console.WriteLine("El dinero sirve para pagar la universidad, por lo tanto puedes estudiar")
        Else
            Console.WriteLine("El dinero No sirve para pagar la universidad, por lo tanto No puedes estudiar")
        End If
    End Sub


    Sub IfSample2()
        '''' Ejercicio 2:
        ' - Elaborar un programa de consola que realice un descuento sobre el valor de una compra teniendo en cuenta lo siguiente:
        ' 1. Si el valor de la compra está entre 50 y 100 el descuento aplicado debe ser del 5%.
        ' 2. Si el valor de la compra está entre 101 y 150 el descuento aplicado debe ser del 10%.
        ' 3. Si el valor de la compra es mayor a 150 el descuento aplicado debe ser del 15%.
        ' Se debe mostrar en la consola solo el valor total de la compra, el valor total de la compra con el descuento aplicado y solo el descuento aplicado.

        Console.Write("Ingrese el valor total de la compra: ")

        Dim valorCompra As Double = Console.ReadLine()
        Dim descuento As Double = 0

        If (valorCompra >= 50 And valorCompra <= 100) Then
            descuento = valorCompra * 0.05
        ElseIf (valorCompra > 100 And valorCompra <= 150) Then
            descuento = valorCompra * 0.10
        ElseIf valorCompra > 150 Then
            descuento = valorCompra * 0.15
        End If

        Dim valorCompraConDescuento = valorCompra - descuento

        Console.WriteLine("Total de la compra: " & valorCompra & vbCrLf & "Total de la compra con descuento: " & valorCompraConDescuento & vbCrLf & "Descuento sobre la compra: " & descuento)
    End Sub


    ' - Select Case


    Sub SelectCase()
        '''' Ejercicio 3:
        ' - Elaborar un programa de consola  que permita realizar una operación básica matemática entre 2 numeros, teniendo en cuenta la opcion del usuario por el teclado:
        ' 1. Suma - 2. Resta - 3. Multiplicación - 4. División - 5. Porcentaje.

        Console.WriteLine("A contiuación se mostrarán opciones para realizar operaciones matemáticas:")
        Console.Write("Ingrese '1' para sumar, '2' para restar, '3' para multiplicar, '4' para dividir, '5' porcentaje.")

        Dim opcion As Integer = Console.ReadLine()
        Dim numero1, numero2 As Double

        Select Case opcion
            Case 1:
                Console.Write("Ingrese el primer numero a sumar: ")
                numero1 = Console.ReadLine()

                Console.Write("Ingrese el segundo numero a sumar: ")
                numero2 = Console.ReadLine()

                Console.WriteLine("La suma de los números es: " & (numero1 + numero2))

            Case 2:
                Console.Write("Ingrese el primer numero a restar: ")
                numero1 = Console.ReadLine()

                Console.Write("Ingrese el segundo numero a restar: ")
                numero2 = Console.ReadLine()

                Console.WriteLine("La resta de los números es: " & (numero1 - numero2))

            Case 3:
                Console.Write("Ingrese el primer numero a multiplicar: ")
                numero1 = Console.ReadLine()

                Console.Write("Ingrese el segundo numero a multiplicar: ")
                numero2 = Console.ReadLine()

                Console.WriteLine("La multiplicación de los números es: " & (numero1 * numero2))

            Case 4:
                Console.Write("Ingrese el primer numero a divisir: ")
                numero1 = Console.ReadLine()

                Console.Write("Ingrese el segundo numero a divisir: ")
                numero2 = Console.ReadLine()

                Console.WriteLine("La división de los números es: " & (numero1 / numero2))

            Case 5:
                Console.Write("Ingrese el primer numero para obtener el porcentaje: ")
                numero1 = Console.ReadLine()

                Console.Write("Ingrese el segundo numero para obtener el porcentaje: ")
                numero2 = Console.ReadLine()

                Console.WriteLine("El " & numero2 & "% de " & numero1 & " es: " & (numero1 * numero2) / 100)

            Case Else
                Console.WriteLine("La opción ingresada no es válida")
    End Sub

End Module

'Al incio del codigo de cada modulo de Visual Basic debe ir la palabra Module con el nombre del archivo.'
Module 1_introduccion

    'El procedimiento Sub realiza una tarea y luego devuelve el control al código de llamada, pero no devuelve un valor al código de llamada. Puede tomar argumentos, como constantes, variables o expresiones que se pasan por un procedimiento de llamada.'
    Sub Main()
        ' Impresion en consola'
        Console.WriteLine("Hola Visual Basic!")

        'Con la funcion ReadKey() podemos definir que el proceso termine cuando se pulse alguna tecla.'
        Console.ReadKey(True)
    End Sub

End Module
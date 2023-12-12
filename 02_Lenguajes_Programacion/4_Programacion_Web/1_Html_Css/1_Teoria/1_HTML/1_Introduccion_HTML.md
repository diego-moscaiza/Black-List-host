# Introduccion a HTML

HTML es el lenguaje principal de la web, es descriptivo y es utilizado para estructurar la interfaz web. El nombre es un acrónimo que significa 'HyperText Markup Language'.

- Estructura básica de HTML:
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

</body>
</html>
```

- Explicación de la estructura básica de HTML:
```html
<!DOCTYPE html> <!-- Declaración de tipo de documento, o sea indica la version html específica -->
<html lang="es"> <!-- Representa la raiz de un documento HTML. El resto de elementos descienden de este elemento. -->
<head> <!-- Provee información general (metadatos) acerca del documento, incluyendo su título y enlaces a scripts y hojas de estilos. -->
     <!-- La etiqueta <meta> aportar información sobre el documento-->
    <meta charset="UTF-8"> <!-- Indica el tipo de codificacion de la pagina -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Usamos los atributos 'name' y 'content' en este caso el primero lo usamos para especificar que estamos otorgando datos sobre el viewport, el segundo lo usamos para indicar que el ancho de la pagina se alinea al ancho del dispositivo y que el zoom predeterminado esté al 100% o 1. -->
    <title>Document</title> <!-- Título de la pagina que ese muestra en la pestaña del navegador, -->
</head>
<body> <!-- Cuerpo donde se encuentra la estructura que se muestra en la pagina web-->
    <!-- Contenido -->
</body>
</html>
```


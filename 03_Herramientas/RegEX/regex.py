#Importamos re
import re

# declaramos una variable 'regex' y le asignamos 'r' y al costado "" y dentro de las comillas debe ir lo que deseamos buscar.

# regex = r"^((M|m)+) [a-zA-Z0-9]{5,8} ((M|m)+)"
# outputRegex = re.search(regex, "Mmmmmm dIEGo10 MmmmmM")

# print(outputRegex)

# 'match' busca que haya una coincidencia perfecta.
# 'findall' encuentra todos los caractéres que se desea buscar.
# 'search' escanera a través de la cadena.


regex1 = r"^((https?://(www\.)?)|www\.)\w{3,}\.[a-z]{2,4}$"
salidaRegex = re.findall(regex1, "https://www.google.com")
print(salidaRegex)

# Expresion regular para email.

p = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]{2,}$'
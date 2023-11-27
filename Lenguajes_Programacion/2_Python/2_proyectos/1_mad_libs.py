# Concatenar cadenas de caracteres.
# Supongamos que queremos crear una cadena que diga:
# Aprende a programar con _________.

# Ejemplo de imprimir
# organizacion = "newCompany"

# print("Aprende a programar con" + organizacion)

# # Usando format().
# print("Aprende a programar con {}".format(organizacion))

# # Usando F-String
# print(f"Aprende a programar con {organizacion}")

#-------------------

# Mad Libs (Historias locas).

adj = input("Adjetivo: ")
verbo1 = input("Verbo 1: ")
verbo2 = input("Verbo 2: ")
sustantivo_plural1 = input("Sustantivo Plural: ")

madlib = f"Programar es tan {adj}!. Siempre me emociona porque me encanta {verbo1} problemas!. Aprende a {verbo2} con cursos y alcanza tus {sustantivo_plural1}"

print(madlib)
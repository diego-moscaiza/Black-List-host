@echo off

:: * ---- NOTAS ----- *
:: mkdir - para CREAR CARPETAS
:: dir - para VER LOS DIRECTORIO/CARPETAS
:: 'dir > @nombre' para CREAR UN ARCHIVO CON LA INFO DEL DIRECTORIO
:: cd - para ACCEDER AL DIRECTORIO
:: move - para MOVER UN ARCHIVO A OTRO DIRECTORIO "ESCRIBIR Origen a DESTINO"

:: ------------------------------

:: * ---- CODIGOS PROBADOS  ---- *

cd "C:\Users\PC\Documents\MIS CURSOS\CURSO DE BATCH SCRIPTING"
dir
mkdir carpetaDePrueba
dir > lista.txt
move lista.txt  carpetaDePrueba
pause
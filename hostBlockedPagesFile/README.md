# Guía para bloquear páginas manualmente

- Primero debes descargar el archivo `host`.
- Luego debes acceder a esta ruta en la computadora: `C:\Windows\System32\drivers\etc`
> Si deseas restaurar archivo puedes descargar el archivo `host-RESTORE`, sólo debes renombrarlo a `host` para que funcione.

- Para agregar más páginas que desees bloquear debes de agrear el link de esta forma:
```
// Página de ejemplo: google.com

127.0.0.1 google.com
127.0.0.1 www.google.com
127.0.0.1 https://www.google.com
```

# ¿Qué es Git?
Git es un sistema de control de versiones que permite llevar un registro de todos los cambios que se realizan en un repositorio.

# Ramas
Git maneja un sistema de ramificación, cada rama se denomina como 'branch' y normalmente al iniciar con git se crea la rama 'main', anteriormente llamada 'master', y se deja como la rama principal donde se insertarán los cambios de las otras ramas y de donde se puede crear nuevas ramas pero no hacer modificaciones en esta.

# CLI
Git funciona a través de comandos que se ingresan en una 'interfaz de línea de comandos', traducido del inglés 'Command Line Interface' abreviado como 'CLI' el cual maneja el intérprete de órdenes 'Bash'.

# ¿Cómo iniciar el control de versiones?
Para iniciar el control de versiones se debe acceder a la carpeta o directorio donde se desee


# Comandos de Git

Todos los comandos de git siempre inician con 'git' para poder ejecutar las funcionalidades de este software.

- **git init**: Para iniciar o reiniciar con el control de versiones.

- **git branch** "nombre de nueva rama": Para crear una nueva rama a partir de la rama donde se ubica actualmente el usuario, junto debe ir el nombre de la nueva rama.

- **git switch** o **checkout** "nombre rama existente": Para cambiar entre las ramas colocando el nombre de la rama a donde se desea ir.

- **git add** "nombre de archivo(s)": Sirve para añadir un archivo o varios con

- **git commit** -m :


- git status: Sirve para ver el estado de la rama donde uno se ubica y puede mostrar la información de la siguiente manera:

    - Cuando no hay archivos en el area de trabajo:
        ![Imagen](git-status/git-status-sin-archivos.png)

    - Cuando hay nuevos archivos en el area de trabajo sin seguimiento:
        ![Imagen](git-status/git-status-con-archivos.png)

- git status -s: El comando 'git status' con la opción '-b' muestra la informacion de forma abreviada.

    - Cuando no hay archivos en el area de trabajo:
        ![Imagen](git-status-opcion-S/git-status-S-sin-archivos.png)        
        - *No muestra nada y salta a la siguiente línea.*

    - Cuando hay nuevos archivos en el area de trabajo:
        ![Imagen](git-status-opcion-S/git-status-S-con-archivos.png)
        - *Muestra el nombre de los archivos .*

- **git merge** "nombre de rama para combinar": .

- git push: 

- git pull

- git log






















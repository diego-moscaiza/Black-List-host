// Definiendo constantes obteniendo nodos del HTML

const input = document.getElementById('ingresar-tarea')
const boton = document.getElementById('btn-crear-tarea')
const listaDeTareas = document.getElementById('lista-de-tareas')

// Definiendo funciones

// Funcion para agregar tareas
function agregarTarea() {
    if(input.value) {
        // Crear tarea
        let tareaNueva = document.createElement('div')
        tareaNueva.classList.add('tarea')
        
        // Texto ingresado por el usuario
        let texto = document.createElement('p')
        texto.innerText = input.value
        tareaNueva.appendChild(texto);

        // Crear y agregar contendor de iconos
        let iconos = document.createElement('div')
        iconos.classList.add('iconos')
        tareaNueva.appendChild(iconos);

        // Agregar Iconos
        let iconoCompletarTarea = document.createElement('i')
        iconoCompletarTarea.classList.add('bi', 'bi-check-circle-fill', 'icono-completar')
        // Aqui escuchamos el click y luego ejecuta la funcion 'completarTarea'
        iconoCompletarTarea.addEventListener('click', completarTarea)

        let iconoEliminarTarea = document.createElement('i')
        iconoEliminarTarea.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar')
        // Aqui escuchamos el click y luego ejecuta la funcion 'eliminarTarea'
        iconoEliminarTarea.addEventListener('click', eliminarTarea)

        // Agregar iconos a su propio contenedor
        // append permite agregar varios nodos hijos y appendChild solo uno.
        iconos.append(iconoCompletarTarea, iconoEliminarTarea)
        
        // Agregar tarea a la lista
        listaDeTareas.appendChild(tareaNueva)

    } else {
        alert('Porfavor ingresa una tarea');
    }   
}

// Funcion para marcar tarea como completada
function completarTarea(ev) {
    let tarea = ev.target.parentNode.parentNode

    // toggle permite alternar una clase. si tiene la clase en el parametro la elimina y si no la agrega.
    tarea.classList.toggle('completada')
}

// Funcion para eliminar una tarea de la lista
function eliminarTarea(ev) {
    let tarea = ev.target.parentNode.parentNode
    tarea.remove()
}

// AddEventListener
boton.addEventListener('click', agregarTarea)
input.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter'){
        agregarTarea();
    }
})

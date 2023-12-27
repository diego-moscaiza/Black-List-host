# Metología RUP

El Proceso unificado de Rational (RUP) es una metodología que tiene como objetivo ordenar y estructurar el desarrollo de software, en la cual se tienen un conjunto de actividades necesarias para transformar los requisitos del usuario en un sistema.

## Estructura del proceso

El proceso puede ser descrito en dos dimensiones o ejes:

**Eje horizontal:** Representa el tiempo y es considerado el eje de los aspectos dinámicos del proceso. Indica las características del ciclo de vida del proceso expresado en términos de fases, iteraciones e hitos. RUP consta de cuatro fases: Inicio, Elaboración, Construcción y Transición. Cada fase se subdivide a la vez en iteraciones.

**Eje vertical:** Representa los aspectos estáticos del proceso. Describe el proceso en términos de componentes de proceso, disciplinas, flujos de trabajo, actividades, artefactos y roles.

A continuación un diagrama de RUP:
![diagrama_rup](img/diagrama_general_de_rup.jpg)


## Fases de RUP

Están definidas cuatro fases de un proyecto: inicio, elaboración, construcción y transición.

En cada fase participan todas las disciplinas, pero dependiendo de la fase el esfuerzo dedicado a una disciplina varía.

### 1. Comienzo:

El comienzo es la primera fase en la cual se elabora la planificación del proyecto con los stakeholders, son ellos quienes han descrito los requisitos para el sistema a desarrollar. La etapa se realiza en un corto período de tiempo.

Guía al equipo para analizar la viabilidad del proyecto y cómo empezar a definir los primeros pasos. Usando este concepto tenemos una metodología llamada 'Lean Inception'.

### 2. Elaboración:

En la fase de elaboración busca relevar casos, documentación, estudios base, es decir, modelos para orientar el proyecto. Esto es para orientar cuál será la mejor manera de acuerdo con las premisas de los interesados.

Tras todo este conocimiento, se elabora un plan de proyecto, con todas las características y especificidades, de la forma más detallada posible.

### 3. Construcción:

En la fase de construcción el objetivo principal es la elaboración del producto por medio de una serie de iteraciones. Para cada iteración se selecciona algunos Casos de Uso, se refina su análisis y diseño y se procede a su implementación y pruebas. Se realiza una pequeña cascada para cada ciclo.

Dado que el método se basa en el desarrollo de software, estamos hablando de crear códigos. Además, en esta etapa se realizan las primeras pruebas para que se prepare la base inicial para la etapa de transición.

### 4. Transición:

En la fase de transición describe las actividades asociadas con el aseguramiento de la entrega y disponibilidad del producto de software hacia los stakeholders o la comunidad de usuarios.

## Disciplinas de RUP

### 1. Modelado de Negocios
Los propósitos que tiene el Modelo de Negocios son:
- Entender los problemas que la organización desea solucionar e identificar mejoras potenciales.
- Medir el impacto del cambio organizacional.
- Asegurar que clientes, usuarios finales, desarrolladores y los otros participantes tengan un entendimiento compartido del problema.
- Derivar los requerimientos del sistema de software, necesarios para dar soporte a los objetivos de la organización.
Entender como el sistema a ser desarrollado entra dentro de la organización.

### 2. Requerimientos
Esta disciplina tiene el propósito de:
- Establecer y mantener un acuerdo con los clientes y los otros interesados acerca de que debe hacer el sistema.
- Proveer a los desarrolladores del sistema de un mejor entendimiento de los requerimientos del sistema.
- Definir los límites (o delimitar) del sistema.
- Proveer un base para la planeación de los contenidos técnicos de las iteraciones.
- Proveer una base para la estimación de costo y tiempo necesarios para desarrollar el sistema.
- Definir una interfaz de usuario para el sistema, enfocada en las necesidades y objetivos del usuario.

### 3. Análisis y Diseño
El propósito del Análisis y Diseño es:
- Transformar los requerimientos a diseños del sistema.
- Desarrollar  una arquitectura robusta para el sistema.
- Adaptar el diseño para hacerlo corresponder con el ambiente de implementación y ajustarla para un desempeño esperado.

### 4. Implementación
El propósito de la implementación es:
- Definir la organización del código, en términos de la implementación de los subsistemas organizados en capas.
- Implementar el diseño de elementos en términos de los elementos (archivos fuente, binarios, ejecutables y otros)
- Probar los componentes desarrollados como unidades.
- Integrar los resultados individuales en un sistema ejecutable.

### 5. Pruebas
Actúa como un proveedor de servicios a las otras disciplinas en muchos aspectos. Se enfoca principalmente en la evaluación y aseguramiento de la calidad del producto, desarrollado a través de las siguientes prácticas:
- Encontrar fallas de calidad en el software y documentarlas.
- Recomendar sobre la calidad percibida en el software.
- Validar y probar las suposiciones hechas durante el diseño y la especificación de requerimientos de forma concreta.
- Validar que el software trabaja como fue diseñado.
- Validar que los requerimientos son implementados apropiadamente.


### 6. Administración y Configuración del Cambio
Consiste en controlar los cambios y mantener la integridad de los productos que incluye el proyecto.
- Identificar los elementos configurables.
- Restringir los cambios en los elementos configurables.
- Auditar los cambios hechos a estos elementos.
- Definir y mantener las configuraciones de estos elementos.
- Los métodos, procesos y herramientas usadas para proveer la administración y configuración del cambio - pueden ser consideradas como el sistema de administración de la configuración.

### 7. Administración de Proyectos
El propósito de la Administración de Proyectos es:
- Proveer un marco de trabajo para administrar los proyectos intensivos de software.
- Proveer guías prácticas para la planeación, soporte, ejecución y monitoreo de proyectos.
- Proveer un marco de trabajo para la administración del riesgo.

### 8. Ambiente
Se enfoca en las actividades necesarias para configurar el proceso al proyecto.
Describe las actividades requeridas para desarrollar las líneas guías de apoyo al proyecto.

El propósito de las actividades de ambiente es proveer a las organizaciones de desarrollo de software del ambiente necesario (herramientas y procesos) que den soporte al equipo de desarrollo.

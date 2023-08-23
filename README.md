# Rappi

El proyecto que estaremos trabajando en este repositorio será un E-Commerce tipo Rappi, desarrollado con JavaScript, React, Node Package Manager (NPM, el gestor de dependencias de NodeJs) para manejar las dependencias dentro del proyecto, la base de datos MongoDB. <br>En el aplicativo web se pueden encontrar las siguientes características:
* Login - Logout
* Registro
* Página principal visualización de productos
* Página visualizar detalles de producto
* Carrito de compras
* Checkout de la compra

# Ejecución del proyecto

## Sistema operativo y requisitos

Para ejecutar el proyecto es necesario un sistema operativo Windows 10 u 11 con el fin de evitar incompatibilidades y errores a la hora de ejecutar el programa.

### Requisitos

* Node.js ([Ver. 18.17.0 LTS](https://nodejs.org/dist/v18.17.1/node-v18.17.1-x64.msi))
* Git ([Última versión](https://git-scm.com/downloads))
* Visual Studio Code ([Última versión](https://code.visualstudio.com/download))
* MongoDB ([Ver. 6.0.9](https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-6.0.9-signed.msi))

<br>
A continuación se detalla el cómo instalar MongoDB:

#### Instalar MongoDB:

Inicialmente se debe descargar el instalador de MongoDB ([Ver. 6.0.9](https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-6.0.9-signed.msi)). Una vez descargado, abrimos el ejecutable; a continuación aparecerá la primera ventana emergente a la cual le daremos "next", la siguente ventana emergente requerirá que aceptemos los términos y condiciones, una vez aceptados avanzaremos a la siguiente ventana emergente, en la cual se nos presentarán dos opciones: "Complete" y "Custom", eligiremos la primer opción (complete), en la siguiente ventana no modificaremos nada y daremos next, en la última ventana emergente nos saldrá la opción "Install MONGODB Compass", la marcaremos y le daremos next.

Al finalizar la instalación se abrirá un software llamado Compass, le daremos start y lo minimizaremos para usarlo luego.

**Nota** Es importante que para ejecutar MongoDB no tengamos caracteres especiales en el nombre del dispositivo donde lo instalamos.



## Pasos a seguir para crear el artefacto

**Clonar el repositorio**: 

Para clonar el repositorio haremos uso de las herramientas de Git, para ello daremos click derecho en el escritorio del computador y seleccionaremos la opción de Git Bash Here (si tienes windows 11, darás click derecho, más opciones y te saldrá Git Bash Here) y escribirás `git clone -b Manuela_Moreno_Arcila-Andres_Felipe_Saldarriaga_Becerra https://github.com/ddragnell/gestion-de-la-configuracion`, de esta forma copiarás todos los archivos que se encuentran en el repositorio de Github en tu dispositivo, ahora puedes cerrar la ventana emergente de Git.

**Instalar las dependencias**:

Para instalar las dependencias que permiten que el programa funcione, debemos hacer lo siguiente:

1. Abrir Visual Studio Code, una vez abierto arrastraremos la carpeta que tenemo en el escritorio donde clonamos el proyecto y la arrastraremos hasta Visual Studio (o dentro del Visual Studio oprimiremos la opción "File" del menú superior, "Open folder" y seleccionaremos la carpeta), oprimiremos `Ctrl + Shift + E` y se abrirá un menú que contiene una carpeta llamada "gestion-de-la-configuracion", la abriremos y veremos otra carpeta llamada "Proyecto" la cual abriremos también. Ahora veremos dos carpetas, "back-end" y "front-end", daremos click derecho en la de "back-end" y seleccionaremos la opción "Open in Integrated Terminal", se nos abrirá una ventana en la parte inferior del Visual Studio, ahí escribiremos el siguiente comando `npm install`, deberá aparecer una barra demostrando que se están descargando e instalando archivos, una vez que haya terminado el proceso podremos cerrar la terminal.

2. Ahora instalaremos las dependencias del front, daremos click derecho en la carpeta "front-end" y seleccionaremos de nuevo "Open in Integrated Terminal", volveremos a escribir `npm install` y esperaremos a que se acaben de instalar las dependencias (puede demorar más tiempo que la instalación de dependencias del back-end).

**Ejecución de la base de datos**:

Ahora tendremos que iniciar la base de datos de Mongo, abriremos de nuevo Compass y le daremos en "New Connection", una vez hecho esto se nos abrirá una caja de texto donde pondremos lo siguiente `mongodb://localhost:27017` y daremos click en Connect, ahora podremos minimizar de nuevo Compass y ejecutar el programa.

**Ejecución del programa**:

1. Volveremos al Visual Studio y daremos click derecho en "back-end" de nuevo, ahroa escribiremos en la terminal que se abra el siguiente comando: `npm run dev` y daremos enter, esto es para ejecutar el Back-end del proyecto: Te deberá aparecer en la consola lo siguiente:

`Ejecutandose en el puerto 5000
Users seed is already done!
Foods seed is already done!
connect successfully---`

De no ser así, la conexión con la base de datos ha tenido un error y deberás realizar el proceso de ejecución de base de datos de nuevo.


2. Ahora daremos de nuevo click derecho en la carpeta "front-end" y seleccionaremos "Open in Integrated Terminal" y escribiremos el siguiente comando `npm build`, esperas a que acabe de ejecutarse el comando y luego escribe `npm start` y daremos enter, con eso tendríamos el front end del proyecto ejécutándose y se abrirá automáticamente una ventana de tu navegador, ¡en hora buena! Ya se está ejecutando el programa.


# Importante

Recuerda que para poder ejecutar el proyecto no debes tener otros proyectos ocupando los puertos del dispositivo, así que cierra cualquier otro proyecto que tengas abierto antes de ejecutar este.

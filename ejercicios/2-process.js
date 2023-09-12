/*
Módulo process (Gestión de procesos):

1 Argumentos de línea de comandos:
Utiliza los argumentos de línea de comandos para mostrar por consola el mensaje "Hola {nombre}" donde {nombre} es el argumento que se pasa al ejecutar el script desde la terminal.

2 Salir del proceso:
Muestra un mensaje de despedida cuando el proceso haya finalizado.

3 Entorno del proceso:
Muestra por consola el valor de una variable de entorno específica para mostrar el mensaje "Estamos en desarrollo" cuando el valor de NODE_ENV sea "development" y "Estamos en producción" cuando sea "production".

4 Utiliza la sintaxis de commonJS.

5 Finalmente crea un script en el package.json que ejecute el código utilizando node (npm run saludar)

Ejemplo de ejecución:
$ npm run saludar "Fabian Gomez"
Hola Fabian Gomez
Estamos en desarrollo
Adios el proceso ha terminado!
*/

const process = require("node:process");
require("dotenv").config();

if (process.argv[2]) {
  console.log("Hola " + process.argv[2]);
} else {
  console.log("No pasaste ningun nombre como argumento");
  process.exit(1);
}

if (process.env.NODE_ENV === "development") {
  console.log("Estamos en desarrollo");
} else if (process.env.NODE_ENV === "production") {
  console.log("Estamos en produccion");
} else {
  console.log("No se reconoce el valor de la variable de entorno");
}

process.on("exit", () => {
  console.log("Adios el proceso ha terminado!");
});

// Valores verdaderos en js
// true
// 1
// " rasgfsdg"
// "0"

// Valores falsos en js
// false
// 0
// ""
// null
// undefined

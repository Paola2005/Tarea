//Entrada de datos input


//1. formulario de html
function mostrarNombre() {
  const nombre = document.getElementById("nombre").value;
  alert("Hola, " + nombre);
}

//2.eventos del teclado
const entrada = document.getElementById("entrada");
  entrada.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      alert("Presionaste Enter. Texto ingresado: " + entrada.value);
    }
  });



//En node js

//3. Linea de comandos
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingresa tu nombre: ", function(nombre) {
  console.log("Hola, " + nombre);
  rl.close();
});



//Salida de datos output

//1. consola del navegador 
console.log("Mensaje en la consola del navegador");
console.warn("Esto es una advertencia");
console.error("¡Algo salió mal!");

//2.manipulacion del dom
const mensaje = "Hola desde JavaScript";
  document.getElementById("salida").textContent = mensaje;

//en node js

//1. consola de node js
console.log("Mensaje en la consola de Node.js");

//2. Escritura en archivos
const fs = require("fs");
const contenido = "Contenido que se escribirá en el archivo.";

fs.writeFileSync("archivo.txt", contenido);
console.log("Archivo creado con éxito.");


//! Utilizando el modulo FS de NodeJS

const fs = require("fs");

//! Fs sincronico
//? Escribir o sobreescribir un archivo
// let contenido = "hola esta es mi variable";
// fs.writeFileSync("./archivos/2.txt", contenido);
// console.log("Archivo creado");

//? Obtener el contenido de un archivo
// const miContenido = () => {
//   let contenidoArchivo = fs.readFileSync("./archivos/2.txt", "utf-8");
//   return contenidoArchivo;
// };

// console.log(miContenido());

// existSync

// const archivoExistente = fs.existsSync("./archivos/3.txt");

// if (archivoExistente) {
//   console.log("El archivo existe");
// } else {
//   console.log("El archivo no existe");
// }

//? Agregar contenido a un archivo

// const contenido = "Contenido agregado"; // \n es un salto de linea
// fs.appendFileSync("./archivos/2.txt", contenido);
// console.log("Contenido agregado");

//? Eliminar un archivo
// fs.unlinkSync("./archivos/2.txt");

//? Crear una carpeta
// fs.mkdirSync("./archivos/carpetaNueva");

//Writefile con callback

const fs = require("fs");

// fs.writeFile(
//   "archivoAsincronico.txt",
//   "Este es mi archivo asincronico",
//   (error) => {
//     if (error) {
//       console.error("Error al crear el archivo");
//     } else {
//       console.log("Archivo creado");
//     }
//   },
// );

// appendFile con callback
// fs.appendFile("miArchivo.txt", "\n¡Esto es nuevo contenido!", (error) => {
//   if (error) {
//     console.error("Error al añadir contenido al archivo:", error.message);
//   } else {
//     console.log("Contenido añadido con éxito.");
//   }
// });

// ? ejemplo de readfile con callback

fs.readFile("archiv.txt", "utf-8", (error, contenido) => {
  if (error) {
    console.error("Error al leer el archivo:", error.message);
  } else {
    console.log("Contenido del archivo:", contenido);
  }
});

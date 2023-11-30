const fs = require("fs");

class FileHandler {
  constructor(fileName) {
    this.fileName = fileName;
  }

  getCurrentDateTime() {
    const dateTime = new Date();
    return dateTime.toLocaleString(); // 2021-08-30T18:29:30.000Z
    // return dateTime; //
  }

  writeCurrentDateTimeToFile(callback) {
    const content = this.getCurrentDateTime();
    fs.writeFile(this.fileName, content, (error) => {
      if (error) {
        callback(error);
      } else {
        console.log(`Fecha y hora escritas en el archivo ${this.fileName}`);
      }
    });
  }

  readFileAndLogContent(callback) {
    fs.readFile(this.fileName, (error, content) => {
      if (error) {
        callback(error);
      } else {
        console.log(`Contenido del archivo ${this.fileName}: ${content}`);
      }
    });
  }
}
//Crear instancia de la clase FileHandler
const fileHandler = new FileHandler("miArchivo.txt");

//Llamar a los metodos usando las callbacks

fileHandler.writeCurrentDateTimeToFile((error) => {
  if (error) {
    console.error("Error al escribir el archivo", error.message);
  } else {
    fileHandler.readFileAndLogContent((error) => {
      if (error) {
        console.error("Error al leer el archivo", error.message);
      } else {
        console.log("Archivo leido correctamente");
      }
    });
  }
});

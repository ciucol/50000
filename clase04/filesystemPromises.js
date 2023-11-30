const fs = require("fs").promises;
//Crear archivo
class FileHandler {
  async escribirArchivo() {
    try {
      await fs.writeFile("miArchivo.txt", "Hola mundo");
      console.log("Archivo creado correctamente");
    } catch (error) {
      console.error("Error al crear el archivo", error);
    }
  }
}

const fileHandler = new FileHandler();
fileHandler.escribirArchivo();

//Ejemplo de uso appendFile con promesas

fs.appendFile("miArchivo.txt", "\n Nuevo contenido con salto de linea")
  .then(() => console.log("Archivo actualizado correctamente"))
  .catch((error) => console.error("Error al actualizar el archivo", error));

//Ejemplo de uso de readFile con promesas

class FileReadHandler {
  async leerArchivo() {
    try {
      const data = await fs.readFile("miArchivo.txt", "utf-8");
      console.log(data);
    } catch (error) {
      console.error("Error al leer el archivo", error);
    }
  }
}

const fileReadHandler = new FileReadHandler();
fileReadHandler.leerArchivo();

objetoRecuperado.intereses.push("Leer");

const nuevoJson = JSON.stringify(objetoRecuperado, null, 2);

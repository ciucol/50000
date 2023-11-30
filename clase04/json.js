//? JSON.stringify() convertir un objeto o valor de Js en una cadena de texto JSON, opcionalmente reemplaza valores si se indica una función de reemplazo o si se especifican las propiedades mediante un array

// JSON.stringify(objetoAConvertir, replacer, "\t")
//? objetoAConvertir: Es el objeto que se va a convertir en una cadena de texto JSON.
//? replacer: Es una función que transforma los valores de las propiedades o un array de strings que indica las propiedades que se incluirán en el JSON resultante.
//? '\t': Es un espacio que se utiliza para dar formato al JSON resultante.

//? JSON.parse() convierte una cadena de texto JSON en un objeto de Javascript

//!! Ejemplos

//? Ejemplo 1

const fs = require("fs");

const data = {
  name: "Juan",
  age: 25,
  country: "CO",
  intereses: ["Programación", "Videojuegos", "Fútbol"],
};

const jsonData = JSON.stringify(data, null, 2);
fs.writeFileSync("data.json", jsonData);

console.log("Datos guardados en un json");

//? Ejemplo 2 JSON.parse

const contenidoJson = fs.readFileSync("data.json", "utf-8");

//Convertir el JSON a un objeto

const objetoRecuperado2 = JSON.stringify(contenidoJson);
fs.writeFileSync("data.json", objetoRecuperado2);

console.log("Objeto recuperado", objetoRecuperado2);

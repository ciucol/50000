//Ejemplo de operacion sincrona

// console.log("Inicio de programa");
// console.log("Hola");
// console.log("Fin de programa");

//Operacion asincrona con setTimeOut
const temporizador = (callback) => {
  setTimeout(() => {
    callback();
  }, 2000);
};

let operacion = () => {
  console.log("Hola");
};

console.log("Inicio de programa");
temporizador(operacion);
console.log("Fin de programa");

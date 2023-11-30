//Funcion definida
function saludar() {
  console.log("Hola");
}
//Funcion anonima
const suma = function (a, b) {
  return a + b;
};

// Ejemplo de uso de funcion anonima
const resultado = suma(3, 5);
console.log(resultado);

// Funcion con callback

const miCallBack = (resultado) => {
  console.log("Hola desde el callback");
};

// Funcion principal que va a realizar una operacion

const operacionPrincipal = (a, b, callback) => {
  const resultado = a + b;
  // Llama a la callback con el resultado
  callback(resultado);
};

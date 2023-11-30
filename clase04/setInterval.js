//ejemplo de una operacion sincrona

// console.log("Inicio de programa");
// console.log("Realizando operacion");
// for (let contador = 1; contador < 5; contador++) {
//   console.log(contador);
// }
// console.log("Fin de programa");

//ejemplo de una operacion asincrona con setInterval

let contador = () => {
  let contador = 0;
  console.log("Tomando un cafe en el break");
  let timer = setInterval(() => {
    console.log(contador++);
    if (contador > 5) {
      clearInterval(timer);
      console.log("Fin de programa");
    }
  }, 1000);
};

console.log("Inicio de programa");
contador();

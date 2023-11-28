const suma = (error, num1, num2) => {
  return num1 + num2
}
const resta = (error, num1, num2) => {
  return num1 - num2
}
const multiplicacion = (error, num1, num2) => {
  return num1 * num2
}
const division = (error, num1, num2) => {
  if (error) return console.log(error)
  return num1 / num2
}

const calculadora = ({ number2, number1 }, cb) => {
  return cb(null, number1, number2)
}

const numbers = {
  number1: 10,
  number2: 5,
}

const response = calculadora(numbers, division)

console.log(response)

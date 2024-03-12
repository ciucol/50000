require('colors')

const suma = require('../src/suma')

console.log(
  'Test 1. La función debe devolver null si algún parámetro no es numérico'
    .underline.yellow
)
const result1 = suma('5', 9)
const expect1 = null
if (result1 === expect1) {
  console.log('Test 1 pasó'.green)
  console.log(`Se experaba ${expect1}`.green)
  console.log(`Se recibió ${result1}`.green)
} else {
  console.log('Test 1 no pasó'.red)
  console.log(`Se experaba ${expect1}`.green)
  console.log(`Se recibió ${result1}`.red)
}

console.log(
  'Test 2. La función debe devolver 0 si no se pasó ningún parámetro'.underline
    .yellow
)
const result2 = suma()
const expect2 = 0
if (result2 === expect2) {
  console.log('Test 2 pasó'.green)
  console.log(`Se experaba ${expect2}`.green)
  console.log(`Se recibió ${result2}`.green)
} else {
  console.log('Test 2 no pasó'.red)
  console.log(`Se experaba ${expect2}`.green)
  console.log(`Se recibió ${result2}`.red)
}

console.log(
  'Test 3. La función debe poder realizar la suma correctamente'.underline
    .yellow
)
const result3 = suma(5, 9)
const expect3 = 14
if (result3 === expect3) {
  console.log('Test 3 pasó'.green)
  console.log(`Se experaba ${expect3}`.green)
  console.log(`Se recibió ${result3}`.green)
} else {
  console.log('Test 3 no pasó'.red)
  console.log(`Se experaba ${expect3}`.green)
  console.log(`Se recibió ${result3}`.red)
}

console.log(
  'Test 4. La función debe poder hacer la suma con cualquier cantidad de números'
    .underline.yellow
)
const result4 = suma(5, 7, 9, 21)
const expect4 = 42
if (result4 === expect4) {
  console.log('Test 4 pasó'.green)
  console.log(`Se experaba ${expect4}`.green)
  console.log(`Se recibió ${result4}`.green)
} else {
  console.log('Test 4 no pasó'.red)
  console.log(`Se experaba ${expect4}`.green)
  console.log(`Se recibió ${result4}`.red)
}

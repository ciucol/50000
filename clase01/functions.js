function saludo(asd) {
  console.log('hola', asd, 'como estás')
  console.log('hola ' + asd + ' como estás')
  console.log(`hola %s como estás`, asd)

  console.log(`hola ${asd} como estas?`)
}

saludo('Mate')

const saludo1 = function (asd) {
  console.log('hola', asd, 'como estás')
  console.log('hola ' + asd + ' como estás')
  console.log(`hola %s como estás`, asd)

  console.log(`hola ${asd} como estas?`)
}

saludo1('Titin')

const saludo2 = (nombre, mama) => {
  console.log('hola', nombre, 'como estás')
  console.log('hola ' + nombre + ' como estás')
  console.log(`hola %s como estás`, nombre)

  console.log(`hola ${nombre} como estas y como esta tu mamá ${mama}?`)

  return 4 + 5
}

const response = saludo2('Benja', 'Caro')

console.log(response)

const despedida = () => {
  return 'chao me fui'
}
const despedida0 = () => 'chao me fui'

const response1 = despedida()
console.log(response1)

const contar = () => {
  let numero = 0
  return () => {
    numero = numero + 1
    console.log(numero)
  }
}

const resultadoDeContar = contar()
resultadoDeContar()
resultadoDeContar()
resultadoDeContar()
resultadoDeContar()
resultadoDeContar()

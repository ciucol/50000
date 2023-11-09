const nombre = 'Bebe nuevo'
console.log(nombre)

const familia = {
  papa: 'Diego',
  mama: 'Caro',
  hermanito: 'Bebe nuevo',
}

console.log(familia)

familia.hermanito = 'Benjamin'
console.log(familia)

familia.hermanito2 = 'Titin'
familia['hermanito3'] = 'Mate'
console.log(familia)

const hobbies = ['futbol', 'musica']
console.log('original: ', hobbies)
hobbies.push('leer')
console.log('agregando al final con push: ', hobbies)
hobbies.pop()
console.log('eliminando al final con pop: ', hobbies)
hobbies.unshift('comer')
console.log('agreando al comienzo con unshift: ', hobbies)
hobbies.shift()
console.log('eliminando al comienzo con shift: ', hobbies)

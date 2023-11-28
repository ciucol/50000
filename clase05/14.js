// const RandomNumbers = require('./14.class')

// const getRandomNumbers = (min, max, totalNumbers) => {
//   const numbers = []
//   for (let i = 0; i < totalNumbers; i++) {
//     numbers.push(Math.round(Math.random() * (max - min) + min))
//   }
//   console.log('creado con función')
//   return numbers
// }

// const numbers1 = getRandomNumbers(3, 12, 20)
// console.log('🚀 ~ file: 14.js:20 ~ numbers:', numbers1)

const getRandomNumbers = (min, max, totalNumbers) => {
  const numbers = {}
  for (let i = 0; i < totalNumbers; i++) {
    const randomRumber = Math.round(Math.random() * (max - min) + min)
    !numbers[randomRumber]
      ? (numbers[randomRumber] = 1)
      : numbers[randomRumber]++
  }

  return numbers
}

const numbers1 = getRandomNumbers(3, 10, 20)
console.log('🚀 ~ file: 14.js:20 ~ numbers:', numbers1)

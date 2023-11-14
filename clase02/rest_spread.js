// const mate = {
//   name: 'Mate',
//   age: 4,
//   country: 'col',
// }

// const newUser = {
//   ...mate,
//   role: 'admin',
// }

// console.log('🚀 ~ file: rest_spread.js:12 ~ newUser:', newUser)
// console.log('🚀 ~ file: rest_spread.js:6 ~ mate:', mate)

const result = (...numbers) => {
  console.log(numbers.reduce((prev, curr) => prev + curr))
}

result(5, 6, 7, 9, 12, 5443, 12, 1, 9)

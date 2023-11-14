// const string = '       hi coders     '
// console.log('🚀 ~ file: trim_flat.js:2 ~ string:', string.trim())

// const numbers = [
//   1,
//   2,
//   3,
//   4,
//   ['4.1', '4.2', '4.3'],
//   5,
//   6,
//   ['6.1', ['6.1.1', '6.1.2'], '6.2'],
//   7,
// ]

// const newNumbers = numbers.flat()
// console.log('🚀 ~ file: trim_flat.js:17 ~ numbers:', numbers)
// console.log('🚀 ~ file: trim_flat.js:17 ~ newNumbers:', newNumbers)

const user = [
  { name: 'Mate' },
  [
    {
      age: 4,
      country: 'col',
      cities: ['per', 'bog'],
    },
  ],
]
console.log('🚀 ~ file: trim_flat.js:30 ~ user:', user.flat(2))

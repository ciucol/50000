// const numbers = [1, 3, 5, 7]
// const response = numbers.map(number => number * 2)

// console.log(response)

const numbers = [10, 30, 50, 70]

const myMap = function (cb) {
  const newArray = []
  for (let i = 0; i < this.length; i++) {
    newArray.push(cb(this[i]))
  }

  return newArray
}

Array.prototype.myCoderMap = myMap

const response = numbers.myCoderMap(number => number * 2)

console.log('My Coder Map is: ', response)

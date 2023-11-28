class RandomNumbers {
  getNumbers(min, max, totalNumbers) {
    const numbers = []
    for (let i = 0; i < totalNumbers; i++) {
      numbers.push(Math.round(Math.random() * (max - min) + min))
    }

    console.log('creado con clase')
    return numbers
  }
}

module.exports = RandomNumbers

const suma = (...numbers) => {
  if (numbers.length === 0) return 0

  if (!numbers.every(number => typeof number === 'number')) return null

  const result = numbers.reduce((prev, curr) => prev + curr)

  return result
}

module.exports = suma

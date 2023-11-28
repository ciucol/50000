const dividir = (dividendo, divisor) => {
  return new Promise((resolve, reject) => {
    if (divisor === 0) {
      reject('No se puede dividir por cero!!!')
    }

    const response = dividendo / divisor
    resolve(response)
  })
}

dividir(100, 2)
  .then(response => {
    console.log(response)
    return response
  })
  .then(response => {
    response = response / 2
    console.log(response)
    return response
  })
  .then(response => {
    response = response / 2
    console.log(response)
    return response
  })
  .catch(error => console.log(error))

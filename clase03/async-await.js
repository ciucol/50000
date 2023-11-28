const dividir = (dividendo, divisor) => {
  return new Promise((resolve, reject) => {
    if (divisor === 0) {
      reject('No se puede dividir por cero!!!')
    }

    const response = dividendo / divisor
    resolve(response)
  })
}

const calculadora = async () => {
  try {
    const response = await dividir(100, 50)

    console.log(response + 2)
  } catch (error) {
    console.log(error)
  }
}

calculadora()

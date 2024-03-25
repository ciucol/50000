const express = require('express')
const morgan = require('morgan')
const addLogger = require('./utils/winston/logger')
const logger = require('./middlewares/logger.middleware')

const app = express()

// app.use(morgan('combined'))
app.use(logger)

app.get('/users', (req, res) => {
  try {
    req.logger.info('Inicia el servicio')
    req.logger.warning('Cuidado vamos para un error')
    throw new Error('Un error!!!')
    res.json({ message: 'Hi Coders!!!' })
  } catch (error) {
    req.logger.error(error.message)
    res.json({ message: error })
  }
})

app.get('/sencilla', (req, res) => {
  let result = 0
  for (let i = 0; i < 10000; i++) {
    result += i
  }

  res.json({ response: result })
})

app.get('/compleja', (req, res) => {
  let result = 0
  for (let i = 0; i < 5e7; i++) {
    result += i
  }

  res.json({ response: result })
})

app.listen(3000, () => {
  console.log(3000)
})

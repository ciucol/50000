const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.json({ message: 'Hi Coders!!!' })
})

app.listen(3000, () => {
  console.log(3000)
})

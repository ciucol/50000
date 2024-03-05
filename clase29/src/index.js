const express = require('express')
const { port } = require('./configs/app.config')
const router = require('./router')

const app = express()

router(app)

app.listen(port, () => {
  console.log(port)
})

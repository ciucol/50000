const express = require('express')
const { port } = require('./configs/app.config')
const router = require('./router')
const mongoConnect = require('./db')

const app = express()

router(app)

mongoConnect()

app.listen(port, () => {
  console.log(port)
})

const express = require('express')
const { port } = require('./configs/app.config')
const router = require('./router')
const mongoConnect = require('./db')

const app = express()

app.use(express.json())
app.use(express.static(`${process.cwd()}/src/public`))

router(app)

mongoConnect()

app.listen(port, () => {
  console.log(port)
})

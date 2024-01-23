const express = require('express')
const dbConnect = require('./db')
const router = require('./router')

const app = express()

app.use(express.json())

dbConnect()

router(app)

app.listen(3000, () => {
  console.log('Server running at 3000')
})

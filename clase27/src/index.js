const express = require('express')
const cors = require('cors')
const MongoConnect = require('./db')
const mongoConnect0 = MongoConnect.getInstance()
const mongoConnect1 = MongoConnect.getInstance()
// const mongoConnect2 = MongoConnect.getInstance()
// const mongoConnect3 = MongoConnect.getInstance()
// const mongoConnect4 = MongoConnect.getInstance()
// const mongoConnect5 = MongoConnect.getInstance()

const app = express()
app.use(cors())

app.get('/byeBye', (req, res) => {
  res.json({ message: 'Chao Coders' })
})

app.listen(3000, () => {
  console.log(3000)
})

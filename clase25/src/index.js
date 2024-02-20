const express = require('express')
const { fork } = require('node:child_process')
const { port, googleMapsApiKey } = require('./configs/app.config')

const app = express()

console.log(googleMapsApiKey)

app.get('/saludo', (req, res) => {
  res.json({ message: process.pid })
})

app.get('/suma', (req, res) => {
  const child = fork('./src/child-process/suma.child-process.js')
  child.send('hola puedes iniciar')
  child.on('message', result => {
    res.json({ result })
  })
})

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})

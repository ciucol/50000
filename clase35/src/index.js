const express = require('express')
const process = require('node:process')
const cluster = require('node:cluster')
const { cpus } = require('node:os')

if (cluster.isPrimary) {
  console.log(`${process.pid} is primary`)

  const numCores = cpus().length
  console.log(numCores)
  for (let i = 0; i < numCores; i++) {
    cluster.fork()
  }

  cluster.on('message', (worker, message) => {
    console.log(worker.process.pid)
    console.log(message)
  })

  cluster.on('exit', worker => {
    console.log(`El proceso con id ${worker.process.pid} desapareció`)
    cluster.fork()
  })
} else {
  process.send(`Inicia el servicio para el process id ${process.pid}`)

  console.log(`${process.pid} is secondary`)

  const app = express()

  app.use(express.json())

  app.get('/sencilla', (req, res) => {
    let result = 0
    for (let i = 0; i < 10000; i++) {
      result += i
    }
    console.log(`Proceso fork ${process.pid}`)

    res.json({ message: result })
  })

  app.get('/compleja', (req, res) => {
    let result = 0
    for (let i = 0; i < 5e7; i++) {
      result += i
    }
    console.log(`Proceso fork ${process.pid}`)

    res.json({ message: result })
  })

  app.listen(3000, () => {
    console.log(`Server running at port 3000 on ${process.pid} process id`)
  })
}

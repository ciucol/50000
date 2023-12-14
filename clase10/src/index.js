const express = require('express')
const { port } = require('./configs/server.config')
const handlebars = require('express-handlebars')
const { Server } = require('socket.io')
const router = require('./router')

const app = express()

app.use(express.json())
app.use(express.static(process.cwd() + '/src/public'))

app.engine('handlebars', handlebars.engine())
app.set('views', process.cwd() + '/src/views')
app.set('view engine', 'handlebars')

router(app)

const httpServer = app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})

const io = new Server(httpServer)

io.on('connection', socket => {
  console.log(socket.id)

  socket.on('message', data => {
    console.log(data)
  })

  socket.emit('messageServer', 'Hola desde el server')

  socket.broadcast.emit('messageOthers', 'Hola a todos menos al principal')

  io.emit('messageAll', 'Hola a todos incluido el principal')
})

const express = require('express')
const handlebars = require('express-handlebars')
const { Server } = require('socket.io')
const router = require('./router')

const chats = []

const app = express()

app.use(express.static(process.cwd() + '/src/public'))

app.engine('handlebars', handlebars.engine())
app.set('views', process.cwd() + '/src/views')

router(app)

const httpServer = app.listen(3000, () => {
  console.log('Server running at port 3000')
})

const io = new Server(httpServer)

io.on('connection', socket => {
  socket.on('newUser', data => {
    socket.broadcast.emit('userConnected', data)
    socket.emit('messageLogs', chats)
  })

  socket.on('message', data => {
    chats.push(data)

    io.emit('messageLogs', chats)
  })
})

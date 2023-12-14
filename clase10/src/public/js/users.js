const socket = io()

socket.emit('newProducts')

socket.on('messageServer', data => {
  console.log(data)
})

socket.on('messageOthers', data => {
  console.log(data)
})

socket.on('messageAll', data => {
  console.log(data)
})

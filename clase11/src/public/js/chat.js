const socket = io()

const chatBox = document.getElementById('chatBox')
const messageLogs = document.getElementById('messageLogs')

const getUsername = async () => {
  try {
    const username = await Swal.fire({
      title: 'Bienvenido al CoderChat',
      text: 'Ingresa tu usuario para identificarte',
      input: 'text',
      icon: 'success',
    })

    socket.emit('newUser', { username: username.value })

    socket.on('userConnected', user => {
      Swal.fire({
        text: `Se acaba de conectar ${user.username}`,
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        icon: 'success',
      })
    })

    chatBox.addEventListener('keyup', e => {
      if (e.key === 'Enter') {
        const data = {
          username: username.value,
          message: chatBox.value,
        }
        chatBox.value = ''

        socket.emit('message', data)
      }
    })
  } catch (error) {
    console.log(error)
  }
}

getUsername()

socket.on('messageLogs', chats => {
  let messages = ''
  chats.forEach(
    chat => (messages += `${chat.username} dice: ${chat.message} <br>`)
  )

  messageLogs.innerHTML = messages
})

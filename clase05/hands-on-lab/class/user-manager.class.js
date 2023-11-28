require('colors')
const fs = require('node:fs')
const crypto = require('node:crypto')

const path = './files/Users.json'

class UserManager {
  users = []

  async getUsers() {
    if (fs.existsSync(path)) {
      const data = await fs.promises.readFile(path, 'utf-8')
      const users = JSON.parse(data)

      return users
    }

    console.log('El archivo no existe')
  }

  async createUser(user) {
    const salt = crypto.randomBytes(128).toString('base64')

    const newUser = {
      name: user.name,
      lastname: user.lastname,
      username: user.username,
      password: crypto
        .createHmac('sha256', salt)
        .update(user.password)
        .digest('hex'),
      salt: salt,
    }

    this.users.push(newUser)

    await fs.promises.mkdir('./files', { recursive: true })
    await fs.promises.writeFile(path, JSON.stringify(this.users, null, '\t'))

    console.log('User created')
  }

  async validateUser(username, password) {
    const users = await this.getUsers()

    if (!users) {
      return console.log('No hay usuarios')
    }

    const userToValidate = users.find(user => user.username === username)

    if (!userToValidate) {
      return console.log('Usuario no encontrado')
    }

    const hashedPassword = crypto
      .createHmac('sha256', userToValidate.salt)
      .update(password)
      .digest('hex')

    if (hashedPassword === userToValidate.password) {
      console.log('Logueado'.red)
    } else {
      console.log('Error: Contraseña incorrecta')
    }
  }
}

module.exports = UserManager

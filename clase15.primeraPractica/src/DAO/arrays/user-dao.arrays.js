class UserDAO {
  users = []

  async tomaTodo() {
    console.log('usuarios desde el array')
    return this.users
  }

  async creamosUno(newUserInfo) {
    console.log('Creado desde el DAO')
    this.users.push(newUserInfo)
    return 'Nuevo usuario creado'
  }
}

module.exports = UserDAO

class UsersMemoryDao {
  constructor() {
    this.users = []
  }

  get() {
    console.log('obteniendo en el DAO de memory')
    return this.users
  }

  create(newUserInfo) {
    console.log('creando en el DAO de meory')
    this.users.push(newUserInfo)
    return 'New User!!!'
  }
}

module.exports = UsersMemoryDao

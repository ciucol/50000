const Users = require('./models/users.model')

class UsersMongoDao {
  async get() {
    console.log('obteniendo en el DAO de Mongo')
    return await Users.find()
  }

  async create(newUserInfo) {
    console.log('creando en el DAO de mongo')
    await Users.create(newUserInfo)
    return 'New User!!!'
  }
}

module.exports = UsersMongoDao

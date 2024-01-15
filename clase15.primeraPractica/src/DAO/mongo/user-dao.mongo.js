const User = require('../../models/user.model')

class UserDAO {
  async tomaTodo() {
    return await User.find()
  }

  async creamosUno(newUserInfo) {
    console.log('Creado desde el DAO')
    return await User.create(newUserInfo)
  }
}

module.exports = UserDAO

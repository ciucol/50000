const { v4: uuidv4 } = require('uuid')
const { hashPassword } = require('../utils/bcrypt.util')

class NewUserDto {
  constructor(userInfo) {
    this.id = uuidv4()
    this.name = userInfo.name
    this.lastname = userInfo.lastname
    this.phone = userInfo.phone
    this.email = userInfo.email
    this.password = hashPassword(userInfo.password)
    this.created_At = Date.now()
  }
}

module.exports = NewUserDto

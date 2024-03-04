const NewUserDto = require('../DTOs/new-user.dto')
const Users = require('../repository')

const getUsers = async () => {
  console.log('desde el service')
  return await Users.get()
}

const createUser = async newUser => {
  console.log('desde el service')
  const newUserInfo = new NewUserDto(newUser)
  return await Users.create(newUserInfo)
}

module.exports = {
  getUsers,
  createUser,
}

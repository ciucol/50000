const UserDAOMongo = require('../DAO/mongo/user-dao.mongo')
const UserDAOArray = require('../DAO/arrays/user-dao.arrays')

const User = new UserDAOMongo()
// const User = new UserDAOArray()

const getAll = async () => {
  try {
    const users = await User.tomaTodo()
    console.log('Obtenemos todos desde el service')
    return users
  } catch (error) {
    throw error
  }
}

const insertOne = async newUserInfo => {
  try {
    newUserInfo.createdAt = new Date()
    newUserInfo.updatedAt = new Date()

    const newUser = await User.creamosUno(newUserInfo)

    return newUser
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAll,
  insertOne,
}

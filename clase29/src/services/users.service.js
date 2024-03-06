const UserMongoDao = require('../DAO/mongo/user-mongo.dao')

const Users = new UserMongoDao()

const getAll = async () => {
  try {
    const result = await Users.getAll()
    return result
  } catch (error) {
    return error
  }
}

const getById = async id => {
  try {
    const result = await Users.getById(id)
    return result
  } catch (error) {
    return error
  }
}

module.exports = {
  getAll,
  getById,
}

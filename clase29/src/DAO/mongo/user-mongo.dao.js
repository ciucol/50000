const User = require('./models/user.model')

class UserMongoDao {
  async getAll() {
    try {
      const results = await User.find()
      return results
    } catch (error) {
      console.log(error)
      return error
    }
  }

  async getById(id) {
    try {
      const result = await User.findById(id)
      return result
    } catch (error) {
      console.log(error)
      return error
    }
  }

  async create(info) {
    try {
      const result = await User.create(info)
      return result
    } catch (error) {
      console.log(error)
      return error
    }
  }

  async update(id, info) {
    try {
      const result = await User.updateOne({ _id: id }, { $set: info })
      return result
    } catch (error) {
      console.log(error)
      return error
    }
  }
}

module.exports = UserMongoDao

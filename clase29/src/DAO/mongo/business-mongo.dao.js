const Business = require('./models/business.model')

class BusinessMongoDao {
  async getAll() {
    try {
      const results = await Business.find()
      return results
    } catch (error) {
      console.log(error)
      return error
    }
  }

  async getById(id) {
    try {
      const result = await Business.findById(id)
      return result
    } catch (error) {
      console.log(error)
      return error
    }
  }

  async create(info) {
    try {
      console.log('llega Dao')
      const result = await Business.create(info)
      console.log('🚀 ~ BusinessMongoDao ~ create ~ result:', result)
      return result
    } catch (error) {
      console.log(error)
      return error
    }
  }

  async update(id, info) {
    try {
      const result = await Business.updateOne({ _id: id }, { $set: info })
      return result
    } catch (error) {
      console.log(error)
      return error
    }
  }
}

module.exports = BusinessMongoDao

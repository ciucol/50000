const Order = require('./models/order.model')

class OrderMongoDao {
  async getAll() {
    try {
      const results = await Order.find()
      return results
    } catch (error) {
      console.log(error)
      return error
    }
  }

  async getById(id) {
    try {
      const result = await Order.findById(id)
      return result
    } catch (error) {
      console.log(error)
      return error
    }
  }

  async create(info) {
    try {
      const result = await Order.create(info)
      return result
    } catch (error) {
      console.log(error)
      return error
    }
  }

  async resolveOrder(id, order) {
    try {
      const result = await User.updateOne({ _id: id }, { $set: order })
      return result
    } catch (error) {
      console.log(error)
      return error
    }
  }
}

module.exports = OrderMongoDao

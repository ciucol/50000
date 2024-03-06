const { v4: uuidv4 } = require('uuid')
const OrderMongoDao = require('../DAO/mongo/order-mongo.dao')
const usersService = require('../services/users.service')
const businessService = require('../services/business.service')

const Orders = new OrderMongoDao()

const getAll = async () => {
  try {
    const result = await Orders.getAll()
    return result
  } catch (error) {
    return error
  }
}

const getById = async id => {
  try {
    const result = await Orders.getById(id)
    return result
  } catch (error) {
    return error
  }
}

const create = async (user, business, products) => {
  try {
    const user = await usersService.getById(user)
    const business = await businessService.getById(business)
    const orderId = uuidv4()

    const result = await Orders.create(newOrdersInfo)
    return result
  } catch (error) {
    return error
  }
}

const addProduct = async (id, product) => {
  console.log('🚀 ~ addProduct ~ product:', product)
  try {
    const Orders = await Orders.getById(id)
    Orders.products.push(product)
    const result = Orders.update(id, Orders)
    return result
  } catch (error) {
    return error
  }
}

module.exports = {
  getAll,
  getById,
  create,
  addProduct,
}

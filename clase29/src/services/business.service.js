const BusinessMongoDao = require('../DAO/mongo/business-mongo.dao')

const Business = new BusinessMongoDao()

const getAll = async () => {
  try {
    const result = await Business.getAll()
    return result
  } catch (error) {
    return error
  }
}

const getById = async id => {
  try {
    const result = await Business.getById(id)
    return result
  } catch (error) {
    return error
  }
}

const create = async newBusinessInfo => {
  try {
    const result = await Business.create(newBusinessInfo)
    return result
  } catch (error) {
    return error
  }
}

const addProduct = async (id, product) => {
  console.log('🚀 ~ addProduct ~ product:', product)
  try {
    const business = await Business.getById(id)
    business.products.push(product)
    const result = Business.update(id, business)
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

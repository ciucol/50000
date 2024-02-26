const ProductsDao = require('../DAOs/products.store')
const EmailManager = require('../utils/email.util')
const codeGenerator = require('../builders')
// const UuidAdapter = require('../adapters/uuid.adapter')
// const UuidAdapter = require('../adapters/superUuid.adapter')
const emailManager = new EmailManager()
const Products = new ProductsDao()

const getAll = () => {
  return Products.find()
}

const create = newProduct => {
  const newProductInfo = {
    id: codeGenerator.generateUuid(),
    name: newProduct.name,
    description: newProduct.description,
    price: addPercentage(newProduct.price),
  }

  const response = Products.create(newProductInfo)

  emailManager.sendMessage(newProductInfo)

  return response
}

const addPercentage = price => {
  return price * 1.2
}

module.exports = {
  getAll,
  create,
}

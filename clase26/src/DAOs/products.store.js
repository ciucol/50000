const { products } = require('../db')

class ProductsDao {
  find() {
    return products
  }

  create(newProductInfo) {
    products.push(newProductInfo)
    return 'New Product Created from Store Layer in DAO'
  }
}

module.exports = ProductsDao

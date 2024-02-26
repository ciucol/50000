const usersController = require('../controllers/users.controller')
const productsController = require('../controllers/products.controller')

const router = app => {
  app.use('/users', usersController)
  app.use('/products', productsController)
}

module.exports = router

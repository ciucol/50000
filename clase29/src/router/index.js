const usersController = require('../controllers/users.controller')
const businessController = require('../controllers/business.controller')
const ordersController = require('../controllers/orders.controller')

const router = app => {
  app.use('/users', usersController)
  app.use('/business', businessController)
  app.use('/orders', ordersController)
}

module.exports = router

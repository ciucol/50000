const usersController = require('../controllers/users.controller')
const vehiclesController = require('../controllers/vehicles.controller')

const router = app => {
  app.use('/users', usersController)
  app.use('/vehicles', vehiclesController)
}

module.exports = router

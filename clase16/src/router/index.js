const usersController = require('../controllers/users.controller.js')
const petsController = require('../controllers/pets.controller.js')

const router = app => {
  app.use('/users', usersController)
  app.use('/pets', petsController)
}

module.exports = router

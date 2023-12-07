const usersController = require('../controllers/users.controller')
const petsContoller = require('../controllers/pets.controller')

const router = app => {
  app.use('/api/users', usersController)
  app.use('/api/pets', petsContoller)
}

module.exports = router

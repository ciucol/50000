const authController = require('../controllers/auth.controller')
const usersController = require('../controllers/users.controller')

const router = app => {
  app.use('/auth', authController)
  app.use('/users', usersController)
}

module.exports = router

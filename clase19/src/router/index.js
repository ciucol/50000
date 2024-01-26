const authController = require('../controllers/auth.controller')
const viewsTemplateController = require('../controllers/views-template.controller')
const usersController = require('../controllers/users.controller')

const router = app => {
  app.use('/', viewsTemplateController)
  app.use('/auth', authController)
  app.use('/users', usersController)
}

module.exports = router

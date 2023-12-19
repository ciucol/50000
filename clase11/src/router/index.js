const templatesController = require('../controllers/templates.controller')

const router = app => {
  app.use('/', templatesController)
}

module.exports = router

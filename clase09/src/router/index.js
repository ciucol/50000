const templatesController = require('../controllers/template.controller')

const router = app => {
  app.use('/', templatesController)
}

module.exports = router

const dictionaryController = require('../controllers/dictionary.controller')
const UsersRouter = require('../controllers/users.controller')

const usersRouter = new UsersRouter()

const router = app => {
  app.use('/users', usersRouter.getRouter())
  app.use('/dictionary', dictionaryController)
  app.use('*', (req, res) => {
    res.status(404).json({ status: 'error', error: 'Not Found' })
  })
}

module.exports = router

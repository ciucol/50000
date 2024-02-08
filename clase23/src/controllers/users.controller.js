const CustomRouter = require('../classes/Custom-Router.class')

class UsersRouter extends CustomRouter {
  init() {
    this.get('/', ['ADMIN'], (req, res) => {
      res.sendSuccess('Todos los usuarios')
    })

    this.post('/', ['ADMIN', 'SUPERADMIN'], (req, res) => {
      const { user, pass } = req.body
      res.json({ message: 'New user created' })
    })
  }
}

module.exports = UsersRouter

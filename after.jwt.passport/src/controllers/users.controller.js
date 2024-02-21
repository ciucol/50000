const { Router } = require('express')
const UsersMongo = require('../db/users.db')
const { authenticateMiddleware } = require('../utils/jwt.util')
const passport = require('passport')

const Users = new UsersMongo()

const router = Router()

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const users = Users.find()

    console.log(req.user)

    res.json({ message: users })
  }
)

module.exports = router

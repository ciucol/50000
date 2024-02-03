const { Router } = require('express')
const Users = require('../models/users.model')
const passport = require('passport')

const router = Router()

router.post(
  '/',
  passport.authenticate('register', {
    failureRedirect: '/users/fail-register',
  }),
  async (req, res) => {
    try {
      res
        .status(201)
        .json({ status: 'Success', message: 'User has been register' })
    } catch (error) {
      console.log(error)
      res.status(500).json({ status: 'error', error: 'Internal Server Error' })
    }
  }
)

router.get('/fail-register', (req, res) => {
  console.log('Falló registro')
  res.status(400).json({ status: 'error', error: 'Bad request' })
})

module.exports = router

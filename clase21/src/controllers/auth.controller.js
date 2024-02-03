const { Router } = require('express')
const Users = require('../models/users.model')
const { useValidPassword, createHash } = require('../utils/crypt-password.util')
const passport = require('passport')

const router = Router()

router.post(
  '/login',
  passport.authenticate('login', { failureRedirect: '/auth/fail-login' }),
  async (req, res) => {
    try {
      req.session.user = {
        first_name: req.user.first_name,
        last_name: req.user.last_name,
        email: req.user.email,
        role: req.user.role,
      }

      res.json({ status: 'Success', message: 'Logged' })
    } catch (error) {
      console.log(error)
      res.status(500).json({ status: 'error', error: 'Internal Server Error' })
    }
  }
)

router.get('/fail-login', (req, res) => {
  res.json({ status: 'error', error: 'Login failed' })
})

router.get('/logout', (req, res) => {
  req.session.destroy(error => {
    if (error) return res.json({ error })
    res.redirect('/login')
  })
})

router.post('/forgot-password', async (req, res) => {
  try {
    const { email, password } = req.body
    console.log('🚀 ~ router.get ~ body:', req.body)

    const passwordEncrypted = createHash(password)

    await Users.updateOne({ email }, { password: passwordEncrypted })

    res.status(200).json({ status: 'Success', message: 'Password updated' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ status: 'error', error: 'Internal Server Error' })
  }
})

router.get(
  '/github',
  passport.authenticate('github', { scope: ['user: email'] }, (req, res) => {})
)

router.get(
  '/githubcallback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  (req, res) => {
    req.session.user = req.user
    res.redirect('/')
  }
)

module.exports = router

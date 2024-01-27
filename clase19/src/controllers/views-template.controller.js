const { Router } = require('express')
const authMiddleware = require('../middlewares/auth.middleware')

const router = Router()

router.get('/login', (req, res) => {
  res.render('login.handlebars')
})

router.get('/signup', (req, res) => {
  res.render('signup.handlebars')
})

router.get('/profile', authMiddleware, (req, res) => {
  const { user } = req.session
  res.render('profile.handlebars', { user })
})

module.exports = router

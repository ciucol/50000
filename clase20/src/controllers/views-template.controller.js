const { Router } = require('express')
const privateAccess = require('../middlewares/private-access.middleware')
const publicAccess = require('../middlewares/public-acces.middleware')

const router = Router()

router.get('/', privateAccess, (req, res) => {
  const { user } = req.session
  res.render('profile.handlebars', { user })
})

router.get('/login', publicAccess, (req, res) => {
  res.render('login.handlebars')
})

router.get('/signup', publicAccess, (req, res) => {
  res.render('signup.handlebars')
})

router.get('/forgotPassword', (req, res) => {
  res.render('forgot-password.handlebars')
})

module.exports = router

const { Router } = require('express')
const Users = require('../models/user.model')

const router = Router()

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body
    console.log(req.body)

    const user = await Users.findOne({ email })
    console.log('🚀 ~ router.post ~ user:', user)

    if (!user) return res.status(400).json({ message: 'Bad request' })

    if (user.password !== password)
      return res.status(400).json({ message: 'Bad request' })

    req.session.user = {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
    }

    res.redirect('/profile')
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ status: 'success', message: 'Internal Server Error' })
  }
})

router.get('/logout', (req, res) => {
  console.log('logout')
  req.session.destroy(err => {
    if (err) {
      console.log('err')
      console.log(err)
      return res.json({ error: err })
    }

    console.log('redirect')
    res.redirect('/login')
  })
})

module.exports = router

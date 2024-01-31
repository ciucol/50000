const { Router } = require('express')
const Users = require('../models/users.model')
const { useValidPassword, createHash } = require('../utils/crypt-password.util')

const router = Router()

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password)
      return res.status(400).json({ status: 'error', error: 'Bad request' })

    const user = await Users.findOne({ email: email })

    if (!user) return res.status(401).json({ status: 'Unauthorized' })
    console.log('🚀 ~ router.post ~ user:', user)

    if (!useValidPassword(user, password))
      return res.status(401).json({ status: 'Unauthorized' })

    req.session.user = {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      role: user.role,
    }
    res.json({ status: 'Success', message: 'Logged' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ status: 'error', error: 'Internal Server Error' })
  }
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

module.exports = router

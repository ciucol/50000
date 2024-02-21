const { Router } = require('express')
const UsersMongo = require('../db/users.db')
const { generateToken } = require('../utils/jwt.util')

const Users = new UsersMongo()

const router = Router()

router.post('/login', (req, res) => {
  const { email, password } = req.body

  const user = Users.findOne(email)
  if (!user) return res.json({ message: 'User not found' })

  if (user.password !== password)
    return res.json({ message: 'Password not matched' })

  const tokenInfo = {
    id: user.id,
    role: user.role,
  }

  const token = generateToken(tokenInfo)

  // res.cookie('authToken', token).json({ message: 'Logged' })

  res.json({ message: 'Logged', token })
})

module.exports = router

const { Router } = require('express')
const { generateToken } = require('../utils/jwt.util')

const router = Router()

const users = [
  {
    id: 1,
    name: 'Mate',
    email: 'mate@naran.com',
    role: 'admin',
    password: 'mate123',
  },
  {
    id: 2,
    name: 'Titin',
    email: 'titin@naran.com',
    role: 'user',
    password: 'titin123',
  },
  {
    id: 3,
    name: 'Benja',
    email: 'Benja@naran.com',
    role: 'admin',
    password: 'benja123',
  },
]

router.post('/login', (req, res) => {
  const { email, password } = req.body

  const user = users.find(user => user.email === email)
  if (!user) return res.json({ message: 'Login no valido' })

  if (user.password !== password)
    return res.json({ message: 'Login no valido' })

  const tokenInfo = {
    id: user.id,
    role: user.role,
  }

  const token = generateToken(tokenInfo)

  res.json({ status: 'success', payload: token })
})

module.exports = router

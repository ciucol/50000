const { Router } = require('express')
const { generateToken, authToken } = require('../utils/jwt.util')
const roles = require('../middlewares/roles.middleware')

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

router.get('/', authToken, roles('admin'), (req, res) => {
  res.json({ status: 'success', payload: users })
})

module.exports = router

const { Router } = require('express')
const { authToken } = require('../utils/jwt.util')

const router = Router()

const users = [
  {
    id: 1,
    name: 'Mate',
    email: 'mate@naran.com',
    password: 'mate123',
  },
]

router.get('/', authToken, (req, res) => {
  try {
    res.json({ status: 'success', payload: users })
  } catch (error) {
    console.log(error)
    res.status(500).json({ status: 'error', error: 'Internal Server Error' })
  }
})

module.exports = router

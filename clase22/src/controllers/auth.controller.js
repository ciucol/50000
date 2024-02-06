const { Router } = require('express')
const { generateToken } = require('../utils/jwt.util')

const router = Router()

const users = [
  {
    id: 1,
    name: 'Mate',
    email: 'mate@naran.com',
    password: 'mate123',
    role: 'user',
  },
]

router.post('/login', (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password)
      return res.status(400).json({ status: 'error', error: 'Bad Request' })

    const user = users.find(user => user.email === email)

    if (!user)
      return res.status(400).json({ status: 'error', error: 'Bad Request' })

    if (user.password !== password)
      return res.status(400).json({ status: 'error', error: 'Bad Request' })

    const token = generateToken({ id: user.id, role: user.role })

    res
      .cookie('authToken', token, {
        maxAge: 60000,
        httpOnly: true,
      })
      .json({ status: 'Success', payload: 'Logged in' })

    // res.json({ status: 'success', payload: token })
  } catch (error) {
    console.log(error)
    res.status(500).json({ status: 'error', error: 'Internal Server Error' })
  }
})

module.exports = router

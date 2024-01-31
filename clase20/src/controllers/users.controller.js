const { Router } = require('express')
const Users = require('../models/users.model')
const { createHash } = require('../utils/crypt-password.util')

const router = Router()

router.post('/', async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body
    if (!first_name || !last_name || !email || !password)
      return res.status(400).json({ status: 'error', error: 'Bad request' })

    const newUserInfo = {
      first_name,
      last_name,
      email,
      password: createHash(password),
    }

    const newUser = await Users.create(newUserInfo)

    res.status(201).json({ status: 'Success', message: newUser })
  } catch (error) {
    console.log(error)
    res.status(500).json({ status: 'error', error: 'Internal Server Error' })
  }
})

module.exports = router

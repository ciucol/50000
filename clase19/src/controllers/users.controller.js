const { Router } = require('express')
const Users = require('../models/user.model')

const router = Router()

router.post('/', async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body

    const newUserInfo = {
      first_name,
      last_name,
      email,
      password,
    }
    console.log('🚀 ~ router.post ~ newUserInfo:', newUserInfo)

    const user = await Users.create(newUserInfo)

    res.json({ status: 'success', message: user })
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ status: 'success', message: 'Internal Server Error' })
  }
})

module.exports = router

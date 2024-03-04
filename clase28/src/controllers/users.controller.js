const { Router } = require('express')
const NewUserDto = require('../DTOs/new-user.dto')
const usersService = require('../services/users.service')

const router = Router()

router.get('/', async (req, res) => {
  const users = await usersService.getUsers()
  res.json({ message: users })
})

router.post('/', async (req, res) => {
  const newUser = await usersService.createUser(req.body)
  res.json({ message: newUser })
})

module.exports = router

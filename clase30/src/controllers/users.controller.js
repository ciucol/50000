const { Router } = require('express')
const usersService = require('../services/users.service')
const NewUserDto = require('../DTO/new-user.dto')
const NewUserResponseDto = require('../DTO/new-user-response.dto')

const router = Router()

router.get('/', (req, res) => {
  try {
    res.json({ status: 'success', payload: users })
  } catch (error) {
    console.log(error)
    res.status(500).json({ status: 'error', error: 'Internal Server Error' })
  }
})

router.post('/', async (req, res) => {
  try {
    const newUserInfo = new NewUserDto(req.body)

    const newUser = await usersService.create(newUserInfo)

    const user = new NewUserResponseDto(newUser[0])

    res.json({ status: 'success', payload: user })
  } catch (error) {
    console.log(error)
    res.status(500).json({ status: 'error', error: 'Internal Server Error' })
  }
})

module.exports = router

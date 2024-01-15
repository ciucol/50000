const { Router } = require('express')
const HTTP_RESPONSES = require('../constants/http-responses.contant')
const User = require('../models/user.model')
const usersService = require('../services/users.service')

const router = Router()

router.get('/', async (req, res) => {
  try {
    const users = await usersService.getAll()
    res.json({ status: 'success', payload: users })
  } catch (error) {
    res
      .status(HTTP_RESPONSES.INTERNAL_SERVER_ERROR)
      .json({ status: 'error', error })
  }
})

router.get('/:id', async (req, res) => {
  try {
    res.json({ status: 'success', payload: user })
  } catch (error) {
    res
      .status(HTTP_RESPONSES.INTERNAL_SERVER_ERROR)
      .json({ status: 'error', error })
  }
})

router.post('/', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body

    const newUserInfo = {
      firstName,
      lastName,
      email,
      password,
    }

    const newUser = await usersService.insertOne(newUserInfo)

    res
      .status(HTTP_RESPONSES.CREATED)
      .json({ status: 'success', payload: newUser })
  } catch (error) {
    res
      .status(HTTP_RESPONSES.INTERNAL_SERVER_ERROR)
      .json({ status: 'error', error })
  }
})

router.put('/:uid', async (req, res) => {
  try {
    const { uid } = req.params

    const { firstName, lastName, email, password } = req.body

    if (!firstName || !lastName || !email || !password)
      res
        .status(HTTP_RESPONSES.BAD_REQUEST)
        .json({ status: error, error: HTTP_RESPONSES.BAD_REQUEST_CONTENT })

    const userInfo = {
      firstName,
      lastName,
      email,
      password,
      updatedAt: new Date(),
    }

    await User.updateOne({ _id: uid }, userInfo)

    res
      .status(HTTP_RESPONSES.CREATED)
      .json({ status: 'success', payload: newUser })
  } catch (error) {
    res
      .status(HTTP_RESPONSES.INTERNAL_SERVER_ERROR)
      .json({ status: 'error', error })
  }
})

router.delete('/:uid', async (req, res) => {
  try {
    res
      .status(HTTP_RESPONSES.CREATED)
      .json({ status: 'success', payload: newUser })
  } catch (error) {
    res
      .status(HTTP_RESPONSES.INTERNAL_SERVER_ERROR)
      .json({ status: 'error', error })
  }
})

module.exports = router

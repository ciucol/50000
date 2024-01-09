const { Router } = require('express')
const User = require('../models/user.model')

const router = Router()

router.get('/', async (req, res) => {
  try {
    const users = await User.find({ status: true })
    res.json({ payload: users })
  } catch (error) {
    res.json({ error })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params

    const user = await User.findOne({ _id: id, status: true })
    res.json({ payload: user })
  } catch (error) {
    res.json({ error })
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

    const newUser = await User.create(newUserInfo)

    res.json({ payload: newUser })
  } catch (error) {
    res.json({ error })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const body = req.body
    console.log('🚀 ~ file: users.controller.js:49 ~ router.put ~ body:', body)

    await User.updateOne({ _id: id, status: true }, body)

    res.json({ payload: 'Usuario actualizado' })
  } catch (error) {
    console.log(error)
    res.json({ error })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params

    await User.updateOne({ _id: id }, { status: false })

    res.json({ payload: 'Usuario eliminado' })
  } catch (error) {
    console.log(error)
    res.json({ error })
  }
})

module.exports = router

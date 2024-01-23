const { Router } = require('express')
const Users = require('../models/users.model')
const usersFile = require('../../Users')

const router = Router()

router.get('/', async (req, res) => {
  try {
    // const users = await Users.find().explain('executionStats')
    // const users = await Users.find({}, { __v: 0 }).populate('pets.pet')
    const users = await Users.find({}, { __v: 0 })
    res.json({ status: 'Success', payload: users })
  } catch (error) {
    console.log(error)
    res.status(500).json({ status: 'error', error: 'Internal Server Error' })
  }
})

router.get('/:name', async (req, res) => {
  try {
    const { name } = req.params
    const users = await Users.findOne({ first_name: name }).explain(
      'executionStats'
    )
    res.json({ status: 'Success', payload: users })
  } catch (error) {
    console.log(error)
    res.status(500).json({ status: 'error', error: 'Internal Server Error' })
  }
})

router.post('/', async (req, res) => {
  try {
    const { first_name, last_name, email, gender } = req.body
    const newUserInfo = {
      first_name,
      last_name,
      email,
      gender,
    }
    const user = await Users.create(newUserInfo)
    res.json({ status: 'Success', payload: user })
  } catch (error) {
    console.log(error)
    if (error.code === 11000) {
      res.status(400).json({ status: 'error', error: 'Email existed' })
      return
    }
    res.status(500).json({ status: 'error', error: 'Internal Server Error' })
  }
})

router.post('/batch', async (req, res) => {
  try {
    await Users.insertMany(usersFile)
    res.json({ status: 'Success', payload: 'Users loaded' })
  } catch (error) {
    console.log(error)
    if (error.code === 11000) {
      res.status(400).json({ status: 'error', error: 'Email existed' })
      return
    }
    res.status(500).json({ status: 'error', error: 'Internal Server Error' })
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { petId } = req.body

    const user = await Users.findById(id)
    user.pets.push({ pet: petId })

    const userUpdated = await Users.updateOne({ _id: id }, user)
    res.json({ status: 'Success', payload: userUpdated })
  } catch (error) {
    console.log(error)
    if (error.code === 11000) {
      res.status(400).json({ status: 'error', error: 'Email existed' })
      return
    }
    res.status(500).json({ status: 'error', error: 'Internal Server Error' })
  }
})

router.delete('/batch', async (req, res) => {
  try {
    const result = await Users.deleteMany({})
    res.json({
      status: 'Success',
      payload: `${result.deletedCount} users deleted`,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ status: 'error', error: 'Internal Server Error' })
  }
})

module.exports = router

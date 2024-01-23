const { Router } = require('express')
const Pets = require('../models/pets.model')

const router = Router()

router.get('/', async (req, res) => {
  try {
    const pets = await Pets.find()
    res.json({ status: 'Success', payload: pets })
  } catch (error) {
    console.log(error)
    res.status(500).json({ status: 'error', error: 'Internal Server Error' })
  }
})

router.post('/', async (req, res) => {
  try {
    const { name, breed, age } = req.body
    const newPetInfo = {
      name,
      breed,
      age,
    }
    const pet = await Pets.create(newPetInfo)
    res.json({ status: 'Success', payload: pet })
  } catch (error) {
    console.log(error)
    if (error.code === 11000) {
      res.status(400).json({ status: 'error', error: 'Email existed' })
      return
    }
    res.status(500).json({ status: 'error', error: 'Internal Server Error' })
  }
})

module.exports = router

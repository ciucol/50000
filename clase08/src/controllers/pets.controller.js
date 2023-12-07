const { Router } = require('express')

const router = Router()

const pets = []

router.get('/', (req, res) => {
  res.json({ payload: pets })
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  const pet = pets.find(pet => pet.id === id)
  res.json({ payload: pet })
})

router.post('/', (req, res) => {
  const { name, breed, age } = req.body

  const newPetInfo = {
    name,
    breed,
    age,
  }

  users.push(newPetInfo)
  res.json({ payload: pets })
})

module.exports = router

const mongoose = require('mongoose')

const petsCollection = 'pet'

const petsSchema = new mongoose.Schema({
  name: String,
  breed: String,
  age: String,
})

const Pets = mongoose.model(petsCollection, petsSchema)

module.exports = Pets

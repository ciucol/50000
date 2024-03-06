const mongoose = require('mongoose')

const businessCollection = 'business'

const businessSchema = new mongoose.Schema({
  name: String,
  products: [],
})

const Business = mongoose.model(businessCollection, businessSchema)

module.exports = Business

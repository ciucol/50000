const mongoose = require('mongoose')

const userCollection = 'user'

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  full_name: String,
  email: String,
  tole: String,
})

const Users = mongoose.model(userCollection, userSchema)

module.exports = Users

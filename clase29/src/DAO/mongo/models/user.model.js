const mongoose = require('mongoose')

const userCollection = 'user'

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: String,
  orders: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'order',
    },
  ],
})

const User = mongoose.model(userCollection, userSchema)
module.exports = User

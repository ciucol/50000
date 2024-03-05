const mongoose = require('mongoose')

const orderCollection = 'order'

const orderSchema = new mongoose.Schema({
  number: String,
  business: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'business',
  },
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'user',
  },
  products: [],
  totalPrice: Number,
})

const Order = mongoose.model(orderCollection, orderSchema)
module.exports = Order

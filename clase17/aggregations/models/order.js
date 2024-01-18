const moongose = require("mongoose");

const orderCollection = "orders";

const OrderSchema = new moongose.Schema({
  name: String,
  size: {
    type: String,
    enum: ["small", "medium", "large"],
    default: "medium",
  },
  price: Number,
  quantity: Number,
  date: Date,
});

const orderModel = moongose.model(orderCollection, OrderSchema);
module.exports = orderModel;

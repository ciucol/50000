const mongoose = require("mongoose");
const orderModel = require("./models/order");

const enviroment = async () => {
  await mongoose.connect(
    "mongodb+srv://karenailenlettieri:Tomi0407@coffeeshop.50uepvy.mongodb.net/?retryWrites=true&w=majority",
    {},
  );
  let orders = await orderModel.aggregate([
    //Stage 1: match
    {
      $match: { size: "medium" },
    },
    //Stage 2: group
    {
      $group: {
        _id: "$name",
        total: { $sum: "$quantity" },
      },
    },
    //Stage 3: sort
    //Ordena los documentos agrupados de mayor a menor. -1 es de mayor a menor, 1 es de menor a mayor.
    {
      $sort: { total: -1 },
    },
    //Stage 4: group 2
    {
      $group: {
        _id: 1,
        orders: { $push: "$$ROOT" },
      },
    },
    //Stage 5: project
    {
      $project: {
        _id: 0,
        orders: "$orders",
      },
    },
    //Stage final: merge
    {
      $merge: {
        into: "reports",
      },
    },
  ]);
};

enviroment();

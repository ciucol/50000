const mongoose = require("mongoose");
const usersModel = require("./models/users");
const mongoosePaginate = require("mongoose-paginate-v2");

const enviroment = async () => {
  await mongoose.connect(
    "mongodb+srv://karenailenlettieri:Tomi0407@coffeeshop.50uepvy.mongodb.net/?retryWrites=true&w=majority",
    {},
  );

  let users = await usersModel.paginate(
    { gender: "Female" },
    { limit: 5, page: 1 },
  );
  console.log(users);
};

enviroment();

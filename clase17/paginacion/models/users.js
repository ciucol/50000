const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const usersCollection = "users";
const usersSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: {
    type: String,
    unique: true,
    match: /.+\@.+\..+/,
  },
  gender: String,
});
//Antes de la instancia del modelo, ponemos el plugin de paginacion
usersSchema.plugin(mongoosePaginate);
const usersModel = mongoose.model(usersCollection, usersSchema);

module.exports = usersModel;

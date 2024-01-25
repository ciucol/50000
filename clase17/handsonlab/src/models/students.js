const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const collection = "Students";

const schema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  grade: Number,
  group: String,
  courses: {
    type: Array,
    default: [],
  },
});
//! IMPORTANTE
schema.plugin(mongoosePaginate);

const studentsModel = mongoose.model(collection, schema);
module.exports = studentsModel;

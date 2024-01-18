const express = require("express");
const handlebars = require("express-handlebars");
const mongoose = require("mongoose");
const path = require("path");
const viewsRouter = require("./src/routes/views.router.js");

const app = express();
const connection = mongoose.connect(
  "mongodb+srv://CoderUser:123@codercluster.w5adegs.mongodb.net/coderDatabase?retryWrites=true&w=majority",
  {},
);

app.use(express.json());

app.engine("handlebars", handlebars.engine());
app.set("views", path.join(__dirname, "src", "views"));
app.set("view engine", "handlebars");

app.use("/", viewsRouter);
const server = app.listen(8080, () => {
  console.log("Servidor OK");
});

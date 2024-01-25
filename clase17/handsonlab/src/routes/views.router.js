const express = require("express");
const studentsModel = require("../models/students.js");

const router = express.Router();

router.get("/students", async (req, res) => {
  const { page = 1 } = req.query;
  const { docs, hasPrevPage, hasNextPage, nextPage, prevPage } =
    await studentsModel.paginate({}, { page, limit: 10, lean: true });
  //Lean es para que se pueda renderizar en handlebars y no de error. Siempre poner en true
  const students = docs;
  res.render("students", {
    students,
    hasPrevPage,
    hasNextPage,
    nextPage,
    prevPage,
  });
});

module.exports = router;

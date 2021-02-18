const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/getStudents", (req, res) => {
  db.Student.findAll({}).then((result) => res.json(result));
});

router.post("/api/newStudent", (req, res) => {
  console.log("adding New Student");
  console.log(req.body);
  db.Student.create(req.body).then((result) => res.json(result));
});

module.exports = router;

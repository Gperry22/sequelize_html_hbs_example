const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/getPets", (req, res) => {
  db.Pet.findAll({}).then((result) => res.json(result));
});

router.post("/api/newPet", (req, res) => {
  console.log("adding New Pet");
  console.log(req.body);
  db.Pet.create(req.body).then((result) => res.json(result));
});


module.exports = router;

const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/pet", (req, res) => {
  res.render("pet");
  //   res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;

const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

router.get("/:hash", (req, res) => {
  const { hash } = req.params;
  const data = fs.readFileSync(path.resolve(__dirname, "../database.json"));
  const savedContent = JSON.parse(data);
  res.json(savedContent[hash]);
});

module.exports = router;

const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const data = fs.readFileSync(path.resolve(__dirname, "../database.json"));
  const savedContent = JSON.parse(data);
  const relevantContent = savedContent[id];
  res.redirect(relevantContent.URL);
});
module.exports = router;

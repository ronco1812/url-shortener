const express = require("express");
const Database = require("../database");
const router = express.Router();
router.get("/:url", (req, res) => {
  const { url } = req.params;
  const shortUrl = new Database(url);
  res.send(shortUrl.shortUrl_id);
  res.send("h");
});
module.exports = router;

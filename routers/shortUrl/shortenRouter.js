const express = require("express");
const Database = require("../classes");
const router = express.Router();
router.get("/", (req, res) => {
  const { url } = req.query;
  const shortUrl = new Database(url);
  res.send(shortUrl.shortUrl_id);
});
module.exports = router;

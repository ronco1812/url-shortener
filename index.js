const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
const path = require("path");

app.use("/public", express.static(`./public`));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("./index.html"));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;

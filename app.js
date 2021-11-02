const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;
const shortenRouter = require("./routers/shortUrl/shortenRouter");
const path = require("path");
// app.use("/public", express.static(`./public`));
// app.get("/", (req, res) => {
//   res.sendFile(path.resolve("./index.html"));
// });

app.use("/shorten", shortenRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

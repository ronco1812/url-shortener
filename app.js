const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;
const shortenRouter = require("./routers/shortUrl/shortenRouter");
const extendRouter = require("./routers/extendUrl/extendRouter");
const statsRouter = require("./routers/statistics/statsRouter");

app.use("/shorten", shortenRouter);
app.use("/original", extendRouter);
app.use("/statistic", statsRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

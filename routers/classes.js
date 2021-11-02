const fs = require("fs");
const path = require("path");
const { uuid } = require("uuidv4");
class Database {
  constructor(url) {
    this.originalUrl = url;
    this.shortUrl_id = uuid();
    function convertDateToSqlFormat() {
      const date = new Date();
      return `${date.getFullYear()}.${
        date.getMonth() + 1
      }.${date.getDay()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    }
    this.creationDate = convertDateToSqlFormat();
    this.redirectCount = 0;
    const data = fs.readFileSync(path.resolve(__dirname, "database.json"));
    const savedContent = JSON.parse(data);
    const id = this.shortUrl_id;
    savedContent[id] = {
      URL: this.originalUrl,
      counter: this.redirectCount,
      creationDate: this.creationDate,
    };
    fs.rmSync(path.resolve(__dirname, "./database.json"));
    fs.appendFile(
      "./routers/database.json",
      JSON.stringify(savedContent),
      (err) => {
        if (err) throw err.message;
      }
    );
  }
}

module.exports = Database;

const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
let data = require("./controllers/data.json");
console.log(data);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/public", express.static(`./client/public`));

app.get("/chat/:username", (req, res, next) => {
  res.set({
    "Content-Type": "text/event-stream",
    Connection: "keep-alive",
    "Cache-Control": "no-cache",
  });

  setInterval(() => {
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  }, 3000);
});

module.exports = app;

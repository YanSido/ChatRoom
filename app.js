const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const messagesRouter = require("./routers/messagesRouter");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/public", express.static(`./client/public`));

app.use("/", messagesRouter);

module.exports = app;

const express = require("express");
const messagesRouter = express.Router();
const fs = require("fs");
const path = require("path");
const { EventEmitter } = require("stream");
const Message = require("../models/messageSchema");

async function getDatabase() {
  let data = await Message.find();
  let messages = [];
  data.forEach((element) => {
    let message = {};
    message[element.username] = element.message;
    message.date = element.date;
    messages.push(message);
  });
  return messages;
}

async function updateDataBase(message) {
  await Message.create({
    username: Object.keys(message)[0],
    message: Object.values(message)[0],
    date: new Date(Date.now()),
  });
}

messagesRouter.get("/chat/", async (req, res, next) => {
  let username = req.query.username;
  console.log(username, "Logged in ...");
  res.set({
    "Content-Type": "text/event-stream",
    Connection: "keep-alive",
    "Cache-Control": "no-cache",
  });
  res.write(`data: ${req.query.username} Logged in ...\n\n`);
  updateDataBase({ [req.query.username]: " Logged in" });
  let messages = await getDatabase();
  req.on("close", () => {
    console.log(username, "Logged out");
    updateDataBase({ [username]: " Logged out" });
    next();
  });
  setInterval(async () => {
    messages = await getDatabase();
    res.write(`data: ${JSON.stringify(messages)}\n\n`);
  }, 1000);
});

messagesRouter.post("/chat/", (req, res, next) => {
  const username = req.query.username;
  const message = req.body.message;
  updateDataBase({ [username]: message });
  res.write("SENT");
});

module.exports = messagesRouter;

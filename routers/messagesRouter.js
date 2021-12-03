const express = require("express");
const messagesRouter = express.Router();
const fs = require("fs");
const path = require("path");
const Message = require("../models/messageSchema");

async function getDatabase() {
  let data = await Message.find();
  let messages = [];
  data.forEach((element) => {
    let message = {};
    message[element.username] = element.message;
    messages.push(message);
  });
  return messages;
}

async function updateDataBase(message) {
  await Message.create({ username: Object.keys(message)[0], message: Object.values(message)[0] });
}

messagesRouter.get("/chat/", async (req, res, next) => {
  console.log(req.query.username, "Logged in ...");
  res.set({
    "Content-Type": "text/event-stream",
    Connection: "keep-alive",
    "Cache-Control": "no-cache",
  });
  let messages = await getDatabase();
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

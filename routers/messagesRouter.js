const express = require("express");
const messagesRouter = express.Router();
const fs = require("fs");
const path = require("path");
const mainPath = __dirname.split("routers")[0];
let data = require("../controllers/data.json");

messagesRouter.get("/chat/", (req, res, next) => {
  console.log(req.query.username, "Logged in ...");
  res.set({
    "Content-Type": "text/event-stream",
    Connection: "keep-alive",
    "Cache-Control": "no-cache",
  });

  setInterval(() => {
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  }, 3000);
});

// function updateDataBase(json) {
//   fs.writeFile(`${mainPath}\\public\\db.json`, JSON.stringify(json), (err) => {
//     if (err) {
//       res.send(err);
//     }
//   });
// }

// messagesRouter.put("/chat", (req, res) => {
//   let newUrl = `${homeUrl}/${req.params.newUrl}`;
//   let usernames = Object.keys(json);
//   let objectsUrl = [];
//   usernames.forEach((element) => {
//     objectsUrl.push(json[element]);
//   });

//   let keys = [];
//   objectsUrl.forEach((element) => {
//     keys.push(Object.keys(element));
//   });
//   let newKeys = [];
//   for (let i = 0; i < keys.length; i++) {
//     keys[i].forEach((element) => {
//       newKeys.push(element);
//     });
//   }

//   for (let i = 0; i < objectsUrl.length; i++) {
//     for (let a = 0; a < newKeys.length; a++) {
//       if (objectsUrl[i][newKeys[a]]) {
//         if (objectsUrl[i][newKeys[a]].newUrl === newUrl)
//           json[getKeyByValue(json, objectsUrl[i])][newKeys[a]].urlClicked += 1;
//         updateDataBase(json);
//         res.redirect(newKeys[a]);
//       }
//     }
//   }
// });

module.exports = messagesRouter;

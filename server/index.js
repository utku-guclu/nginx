const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Here I am!");
});

app.listen(7777, () => {
  console.log("listening on...");
});

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.send("Hellow World");
});

app.listen(3000);

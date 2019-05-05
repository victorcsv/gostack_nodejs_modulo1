const express = require("express");
const app = express();

const logMiddleware = (req, res, next) => {
  console.log(
    `HOST: ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method}`
  );
  return next();
};

app.get("/", logMiddleware, (req, res) => {
  return res.send(`Bem-vindo, ${req.query.name}`);
});

app.get("/nome/:name", (req, res) => {
  return res.json({
    message: `Bem-vindo, ${req.params.name}`
  });
});

app.listen(3000);

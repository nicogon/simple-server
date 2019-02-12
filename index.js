var express = require("express");
fs = require("fs");
var app = express();
const port = 3000;

// respond with "hello world" when a GET request is made to the homepage

app.get("/(*)", function(req, res) {
  res.set("x-ratelimit-asdas", "tasdasdas");
  // res.sendStatus(429);
  res.sendfile("hola.png");
  //  res.send('hello world')
});

app.listen(port, () => console.log(`Server iniciado en puerto ${port}!`));

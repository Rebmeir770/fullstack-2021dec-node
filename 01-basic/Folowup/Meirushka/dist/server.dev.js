"use strict";

// console.log('hello wold')
// function multi(a, b){
//     return Math.sqrt(a*b)
// }
// let result = multi(5, 10);
// console.log(result);
var express = require('express');

var app = express();
var port = 4000;
app.use(express["static"]('public')); // route

app.get("/", function (req, res) {
  res.send("Hello World!");
});
app.get("/bla", function (req, res) {
  res.send("bla bla");
});

function multi(a, b) {
  return a * b;
}

app.get('/multi', function (req, res) {
  res.send("<h1>".concat(multi(8, 9), "</h1>"));
});
app.listen(port, function () {
  console.log("Server listening on port ".concat(port));
});
"use strict";

// console.log('hello wold')
// function multi(a, b){
//     return Math.sqrt(a*b)
// }
// let result = multi(5, 10);
// console.log(result);
var express = require('express');

var app = express();
var port = 5000;
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(port, function () {
  console.log("Server listening on port ".concat(port));
});
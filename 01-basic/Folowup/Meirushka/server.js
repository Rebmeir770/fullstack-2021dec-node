// console.log('hello wold')

// function multi(a, b){
//     return Math.sqrt(a*b)

// }
// let result = multi(5, 10);
// console.log(result);

var express = require('express')
var app = express()
const port = 4000;

app.use(express.static('public'));

// route
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/bla", (req, res) => {
    res.send("bla bla");
});

function multi(a,b){
   return a*b; 
}

app.get('/multi', (req, res) =>{
    res.send(`<h1>${multi(8, 9)}</h1>`)
});


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});


// console.log('hello wold')

// function multi(a, b){
//     return Math.sqrt(a*b)

// }
// let result = multi(5, 10);
// console.log(result);

var express = require('express')
var app = express()
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})


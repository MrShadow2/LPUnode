const express = require("express")
const app = express()
app.use(express.json())

function addNums(req, res) {
    const a = req.body.a;
    const b = req.body.b;
    const name = req.body.name;
    console.log(name);
    const sum = a + b;
    res.send(
        {
            "sum": sum
        }
    );
}
app.get('/addTwoNums', addNums)

function addList(req, res) {
    const list = req.body.list;
    const sum = list.reduce((a, b) => a + b, 0);
   


    res.send(
        {
            "sum": sum
        }
    );
}

app.get('/addList', addList)
//for multiply list of nos
function multiplyList(req, res) {
    const list = req.body.list;
    const product = list.reduce((a, b) => a * b, 1);

    res.send(
        {
            "product": product
        }
    );
}

app.get('/multiplyList', multiplyList)


//for multiply two nos
function multiplyNums(req, res) {
    const a = req.body.a;
    const b = req.body.b;
    const product = a * b;
    res.send(
        {
            "product": product
        }
    );
}
app.get('/multiplytwoNums', multiplyNums)

//for subtract two nos

function subtractNums(req, res) {
    const a = req.body.a;
    const b = req.body.b;
    const difference = a - b;
    res.send(
        {
            "difference": difference
        }
    );
}
app.get('/subtracttwoNums', subtractNums)

//for devide  2 nos
function devideNums(req, res) {
    const a = req.body.a;
    const b = req.body.b;
    const quotient = a / b;
    res.send(
        {
            "quotient": quotient
        }
    );
}
app.get('/devidetwoNums', devideNums)
  



const port = 3001
const ip = "localhost"
app.listen(port, ip, function() {
    console.log("I am listening");
})
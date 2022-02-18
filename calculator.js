const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post("/", (req, res) => {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);

    let results = num1 + num2;

    res.send("The result of our calculation is " + results);
})

app.get("/bmiCalculator", (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmiCalculator", (req, res) => {
    let w = Number(req.body.weight);
    let h = Number(req.body.height);

    let results = w/Math.pow(h, 2);

    res.send("The result of our calculation is " + results);
})

app.listen(port, () => {
    console.log("Server started on port " + port);
});


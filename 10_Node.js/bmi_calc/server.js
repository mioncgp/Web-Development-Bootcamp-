const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const result = calculatorBMI(req.body.weight, req.body.height);
  res.send(`The result is:  ${result}`);
});

function calculatorBMI(weight, height) {
  const num1 = Number(weight);
  const num2 = Math.pow(Number(height) / 100, 2);

  const result = num1 / num2;

  return result.toFixed(2);
}

app.listen(3001, () => {
  console.log("running port 3001");
});

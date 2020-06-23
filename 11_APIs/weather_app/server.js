const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=c0c9635e078bd384b5ca8642ca9d913c";
  https.get(url, function (res) {
    console.log(res);
  });
  res.send("server is running");
});

app.listen(3000, () => {
  console.log("port 3000");
});

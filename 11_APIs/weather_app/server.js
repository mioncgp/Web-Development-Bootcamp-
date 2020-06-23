const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=c0c9635e078bd384b5ca8642ca9d913c";
  https.get(url, function (response) {
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      res.write(`<h1> ${weatherDescription} </h1>`);
      res.write(`<img src="https://openweathermap.org/img/wn/${icon}@2x.png">`);
      res.end();
    });
  });
});

app.listen(4000, () => {
  console.log("port 4000");
});

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = ["cookie"];
let workItems = [];

app.get("/", function (req, res) {
  res.render("list", { listTitle: date(), newListItems: items });
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work", newListItems: workItems });
});

app.post("/work", function (req, res) {
  let item = req.body.newItem;

  workItems.push(item);

  res.redirect("/work");
});

app.post("/", function (req, res) {
  let item = req.body.newItem;
  if (req.body.button === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(req.body);
    res.redirect("/");
  }
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});

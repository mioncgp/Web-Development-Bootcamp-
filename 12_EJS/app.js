const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todoListDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const schemaItems = {
  name: String,
};

const Item = mongoose.model("Item", schemaItems);

const item1 = new Item({
  name: "Welcome to your to do list",
});

const item2 = new Item({
  name: "Here is your to do list",
});

const item3 = new Item({
  name: "there is to delete an item",
});

const item4 = new Item({
  name: "there is to delete an item",
});

const defaultItems = [item1, item2, item3, item4];

let workItems = [];

app.get("/", function (req, res) {
  Item.find({}, function (err, foundItems) {
    if (defaultItems.length === 0) {
      Item.insertMany(defaultItems, function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Items are inserted");
        }
      });
      res.redirect("/");
    } else {
      res.render("list", {
        listTitle: "Today",
        newListItems: foundItems,
      });
    }
  });
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
  let itemName = req.body.newItem;

  const newItem = new Item({
    name: itemName,
  });

  newItem.save();

  res.redirect("/");
});

app.post("/delete", function (req, res) {
  const checkedItem = req.body.checkbox;
  Item.findByIdAndRemove(checkedItem, function (err) {
    console.log("removed");
  });
  res.redirect("/");
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});

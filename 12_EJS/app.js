const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("loadash");

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

const defaultItems = [item1, item2, item3];

const listSchema = {
  name: String,
  items: [schemaItems],
};

const List = mongoose.model("List", listSchema);

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
        newListItems: defaultItems,
      });
    }
  });
});

app.post("/", function (req, res) {
  let itemName = req.body.newItem;
  const listName = req.body.list;

  const newItem = new Item({
    name: itemName,
  });

  if (listName === "Today") {
    newItem.save();
    res.redirect("/");
  } else {
    List.findOne({ name: listName }, function (err, foundList) {
      foundList.items.push(newItem);
      foundList.save();
      res.redirect("/" + listName);
    });
  }
});

app.post("/delete", function (req, res) {
  const checkedItem = req.body.checkbox;
  const listName = req.body.listName;

  if (listName === "Today") {
    Item.findByIdAndRemove(checkedItem, function (err) {
      console.log("removed");
    });
    res.redirect("/");
  } else {
    List.findOneAndUpdate(
      { name: listName },
      { $pull: { items: { _id: checkedItem } } },
      function (err, foundList) {
        if (!err) {
          res.redirect("/" + listName);
        }
      }
    );
  }
});

app.get("/:customListName", function (req, res) {
  const customListName = _.capitalize(req.params.customListName);

  List.findOne({ name: customListName }, function (err, foundList) {
    if (!err) {
      if (!foundList) {
        const list = new List({
          name: customListName,
          items: defaultItems,
        });

        list.save();
        res.redirect("/" + customListName);
      } else {
        res.render("list", {
          listTitle: foundList.name,
          newListItems: foundList.items,
        });
      }
    }
  });
});

app.post("/work", function (req, res) {
  let item = req.body.newItem;

  workItems.push(item);

  res.redirect("/work");
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});

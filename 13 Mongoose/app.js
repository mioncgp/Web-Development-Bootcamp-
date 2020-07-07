const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "John",
  age: 37,
});

const person2 = new Person({
  name: "Mike",
  age: 27,
});
const person3 = new Person({
  name: "Sana",
  age: 33,
});

Person.find(function (err, person) {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();
    person.forEach((object) => {
      console.log(object.name);
    });
  }
});

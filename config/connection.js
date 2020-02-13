const mongoose = require("mongoose");

mongoose
  // .connect("mongodb://localhost/test", {
  .connect("mongodb://localhost/firstdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connect to mongo database");
  })
  .catch(error => {
    console.log("The is something wrong", error);
  });

const db = mongoose.connect;
module.exports = db;

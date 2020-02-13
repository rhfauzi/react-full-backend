const mongoose = require("mongoose");

mongoose
  // .connect("mongodb://localhost/test", {
  .connect(
    "mongodb+srv://fauzi:fauzi123@cluster0-bxbeu.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => {
    console.log("Connect to mongo database");
  })
  .catch(error => {
    console.log("The is something wrong", error);
  });

const db = mongoose.connect;
module.exports = db;

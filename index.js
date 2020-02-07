require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const todos = require("./todo");

const PORT = process.env.PORT;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  const newData = [];
  res.send({
    data: todos
  });
});

app.delete("/:id", (req, res) => {
  const getId = parseInt(req.params.id);

  todos.splice(getId - 1, 1);

  res.send({
    message: `Your data is delete`,
    data: todos
  });
});

// app.delete("/:id", (req, res) => {
//   const newData = todos.filter(item => item.id !== req.params.id);
//   // let todos = newData;
//   res.json(newData);
// });

app.listen(PORT, () => console.log(`Express server is ready on PORT: ${PORT}`));

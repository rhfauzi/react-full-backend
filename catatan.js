const express = require("express");
const bodyParse = require("body-parser");
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());



app.get("/", (req, res) => {
  res.send({
    message: "Todolist ",
    // data: { name: req.body.name }
    data: todos
  });
});

app.get("/", (req, res) => {
  const todos = [
    {
      id: 1,
      todo: "Learn API"
    },
    { id: 2, todo: "Eat" }
  ];
  res.send({ message: "Welcome to my API", data: todos });
});

app.get("/hello", (req, res) => {
  res.send({
    message: "this hello route"
  });
});

app.delete("/deleteone", (req, res) => {
  const { id, todo } = req.body;
  //   delete use id
    todos.splice(id, 1);
  //   todos.splice(todos.indexOf("id"), 1);

  res.send({
    message: `Array id ${id} have been delete`,
    data: todos
  });
});

app.get("/hello/:id", (req, res) => {
    res.send({
        message: `his hello route with param ${id}`
    })
//   const todos = [
//     {
//       id: 1,
//       todo: "Learn API",
//       age: "23"
//     },
//     { id: 2, todo: "Eat", age: "23" }
//   ];
//   res.send({
//     message: "Welcome to my API, this hello route with param",
//     data: todos
//   });
});

app.delete("/", (req, res) => {
  //   const newData = [];
  //   todos = [];
  //   todos = JSON.stringify(newData);
  //   todos.push({ todos });
  //   res.json(todos);
  todos.splice(0, todos.length);
  console.log(todos);
  //   for (const i = 0; i <= todos.length; i++) {
  //     todos.splice(i, 1);
  //   }

  res.send({
    message: `Your data is delete`,
    data: todos
  });
});

// app.delete("/", (req, res) => {
//   //   const newData = [];
//   //   todos = [];
//   //   todos = JSON.stringify(newData);
//   //   todos.push({ todos });
//   //   res.json(todos);
//   todos.splice(0, todos.length);

//   //   for (const i = 0; i <= todos.length; i++) {
//   //     todos.splice(i, 1);
//   //   }

//   res.send({
//     message: `Your data is delete`,
//     data: todos
//   });
// });

app.post("/hello/:id", (req, res) => {
  res.send({
    id: req.params.id
  });
});

app.get("/", (req, res) => {
// app.use(function (req, res) {
//     res.setHeader('Content-Type', 'text/plain')
//     res.write('you posted:\n')
//     res.end(JSON.stringify(req.body, null, 2))
//   })

app.listen(3001, () =>
  console.log("Express server is ready on localhost:3001")
);
}

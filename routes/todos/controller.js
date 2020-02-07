const todos = require("../../models/todos");

module.exports = {
  getAll: (req, res) => {
    // res.status(200).send({ message: "welcome to todos route" });
    res.status(200).send({ message: "your data is added", data: todos });
  },
  deleteById: (req, res) => {
    const newTodos = [];
    const getId = parseInt(req.params.id);
    todos.splice(getId - 1, 1);

    res
      .status(200)
      .send({ message: `Your data INDEX ${getId} is delete `, data: todos });
  },
  deleteAll: (req, res) => {
    todos.splice(0, todos.length);

    res.status(200).send({ message: `All your data is delete`, data: todos });
  },
  addTodos: (req, res) => {
    todos.push(req.body);
    res.status(200).send({
      message: `Your data Have been save!`,
      data: todos
    });
  },
  editById: (req, res) => {
    const newTodos = [];
    todos.forEach(item => {
      if (item.id === req.params.id) {
        console.log(`Get id = ${req.params.id}`);
        console.log(`id = ${item.id}`);
        newTodos.push(req.body);
      } else {
        newTodos.push(item);
      }
    });
    res.status(200).send({
      message: `Your data with id ${req.params.id} Have been Edit!`,
      data: newTodos
    });
  }
};

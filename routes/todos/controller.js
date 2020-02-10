// const todos = require("../../models/todos"); //ambil data dari file todo
const { Todos } = require("../../models"); //ambil data dari database

module.exports = {
  getAll: async (req, res) => {
    try {
      const result = await Todos.find({});

      res.status(200).send({ message: "Show data todos", data: result });
    } catch (error) {
      console.log(error);
    }
    // res.status(200).send({ message: "welcome to todos route" });
  },
  addData: async (req, res) => {
    try {
      const result = await Todos.create(req.body);

      res.status(200).send({ message: "Add data todos", data: result });
    } catch (error) {
      console.log(error);
    }
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

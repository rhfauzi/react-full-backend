const users = require("../../models/user");

module.exports = {
  getAll: (req, res) => {
    res.status(200).send({ message: "Your data is added", data: users });
  },
  getById: (req, res) => {
    const getId = parseInt(req.params.id);
    const item = users.find(element => element.id === getId);
    if (item) {
      res.status(200).send({ message: `Your data is By ID `, data: item });
    } else {
      res.status(200).send({ message: `User By ID ${getId} doesn't exist` });
    }
  },
  getByUsername: (req, res) => {
    const getUsername = req.params.username;
    const item = users.find(element => element.username === getUsername);
    if (item) {
      res.status(200).send({
        message: `Your data By Username : ${getUsername}`,
        data: item
      });
    } else {
      res
        .status(200)
        .send({ message: `User By Username : ${getUsername} doesn't exist` });
    }
  },
  getByEmail: (req, res) => {
    const getEmail = req.params.email;
    const item = users.find(element => element.email === getEmail);
    if (item) {
      res.status(200).send({
        message: `Your data By Email : ${getEmail}`,
        data: item
      });
    } else {
      res
        .status(200)
        .send({ message: `User By Username : ${getEmail} doesn't exist` });
    }
  },
  updateByEmail: (req, res) => {
    const newUsers = [];
    const getEmail = req.params.email;

    users.forEach(element => {
      if (element.email === getEmail) {
        newUsers.push(req.body);
      } else {
        newUsers.push(element);
      }
    });
    res.status(200).send({
      message: `User By Username : ${getEmail} Have Been Edit`,
      data: newUsers
    });
  },
  deleteByEmail: (req, res) => {
    const getEmail = req.params.email;
    users.splice(getEmail, 1);

    res.status(200).send({
      message: `your data with email ${getEmail} is delete`,
      data: users
    });
  },
  deleteByUsername: (req, res) => {
    const getUsername = req.params.username;
    users.splice(getUsername, 1);

    res.status(200).send({
      message: `your data with username ${getUsername} is delete`,
      data: users
    });
  },
  inputUser: (req, res) => {
    users.push(req.body);
    res.status(200).send({ message: "your data is added", data: users });
  },
  deleteAll: (req, res) => {
    users.splice(0, users.length);

    res.status(200).send({ message: `All your data is delete`, data: users });
  },
  postData: (req, res) => {
    try {
      const data = req.body;
      const file = req.file;

      users.push({ ...data, avatar: file.path });

      console.log(file);
      // console.log(data);

      res.status(200).send({
        message: "New data successfully added",
        // data: { ...data, avatar: file.path }
        data: users
      });
    } catch (error) {
      console.log(error);
    }
  }
};

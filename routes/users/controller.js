//this file for controller that get data from database
const { Users } = require("../../models"); //ambil data dari database
const { hashPassword, comparedPassword } = require("../../helpers");
const jwt = require("jsonwebtoken");

module.exports = {
  getAll: async (req, res) => {
    try {
      const result = await Users.find({});

      res.status(200).send({ message: "Show data Users", data: result });
    } catch (error) {
      console.log(error);
    }
    // res.status(200).send({ message: "Your data is added", data: users }); get from local data
  },
  //users/
  addData: async (req, res) => {
    try {
      const data = req.body;
      const file = req.file;
      const hash = await hashPassword(req.body.password);

      const result = await Users.create({
        ...data,
        avatar: file === undefined ? null : file.path,
        password: hash
      });

      res.status(200).send({
        message: "New data user is successfully added",
        data: result
      });
    } catch (error) {
      console.log(error);
    }
  },

  //users/username/:username
  getByUsername: async (req, res) => {
    try {
      const getUsername = req.params.username;
      const result = await Users.find({ username: getUsername });
      res.status(200).send({
        message: `Get User By Username = ${getUsername}`,
        data: result
      });
    } catch (error) {
      console.log(error);
    }
  },
  //users/email/:email
  getByEmail: async (req, res) => {
    try {
      const getEmail = req.params.email;
      const result = await Users.find({ email: getEmail });
      res.status(200).send({
        message: `Get User By Email = ${getEmail}`,
        data: result
      });
    } catch (error) {
      console.log(error);
    }
  },
  //users/id/:id
  getById: async (req, res) => {
    try {
      const getId = req.params.id;
      const result = await Users.find({ _id: getId });
      res.status(200).send({
        message: `Get User By id = ${getId}`,
        data: result
      });
    } catch (error) {
      console.log(error);
    }
  },
  updateByEmail: async (req, res) => {
    try {
      const data = req.body;
      const getEmail = req.params.email;
      await Users.findOneAndUpdate(
        { email: getEmail },
        data,
        { new: true },
        (err, newData) => {
          res.status(200).send({
            message: `Edit User by Email ${getEmail}`,
            data: newData
          });
        }
      );
    } catch (error) {
      console.log(error);
    }
  },
  deleteByEmail: async (req, res) => {
    try {
      const getEmail = req.params.email;
      await Users.deleteOne({ email: getEmail }, (err, result) => {
        if (err) {
          console.log(err);
        }
        res.status(200).send({
          message: `User with Email : ${getEmail} has been deleted.`,
          data: result
        });
      });
    } catch (error) {
      console.log(error);
    }
  },
  deleteByUsername: async (req, res) => {
    try {
      const getUsername = req.params.username;
      await Users.deleteOne({ email: getUsername }, (err, result) => {
        if (err) {
          console.log(err);
        }
        res.status(200).send({
          message: `User with username : ${getUsername} has been deleted.`,
          data: result
        });
      });
    } catch (error) {
      console.log(error);
    }
  },
  login: async (req, res) => {
    try {
      const result = await Users.findOne({ email: req.body.email });

      const compared = await comparedPassword(
        req.body.password,
        result.password
      );

      if (compared === true) {
        const { email, id, username, firstname } = result;

        const token = jwt.sign({ email, id, username, firstname }, "INISECRET");

        res.status(200).send({
          message: "You are successfully logged in",
          data: result
        });
      } else {
        res.status(403).send({
          message: "You are not an user, please register first"
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
};

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  firstname: {
    type: String,
    required: true,
    default: "PROGRESS"
  },
  lastname: {
    type: String,
    required: false,
    default: "PROGRESS"
  },
  username: {
    type: String,
    required: true,
    default: "PROGRESS"
  },
  email: {
    type: String,
    required: true,
    default: "PROGRESS"
  },
  password: {
    type: String,
    required: true,
    default: "PROGRESS"
  },
  age: {
    type: String,
    required: false,
    default: "PROGRESS"
  }
});

const Users = mongoose.model("Users : ", usersSchema);
module.exports = Users;

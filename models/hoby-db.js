const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hobySchema = new Schema({
  nama: {
    type: String,
    required: true
  },
  keterangan: {
    type: String
  },
  status: {
    type: Boolean,
    required: true,
    default: true
  }
});

const Hoby = mongoose.model("Hoby : ", hobySchema);
module.exports = Hoby;

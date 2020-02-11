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
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  }
});

const Hoby = mongoose.model("hoby", hobySchema);

module.exports = Hoby;

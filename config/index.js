const { PORT } = require("./environment"); //type of string
const upload = require("./multer"); //type object

// console.log(typeof PORT);

module.exports = {
  PORT,
  upload
};

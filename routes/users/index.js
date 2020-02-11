const express = require("express");
const router = express.Router();
const { upload } = require("../../config");

const {
  getAll,
  getById,
  getByUsername,
  getByEmail,
  updateByEmail,
  deleteByEmail,
  deleteByUsername
} = require("./controller");

router.get("/", getAll);
router.get("/id/:id", getById);
router.get("/username/:username", getByUsername);
router.get("/email/:email", getByEmail);

router.put("/email/:email", updateByEmail);

router.delete("/email/:email", deleteByEmail);
router.delete("/username/:username", deleteByUsername);

router.post("/", upload.single("avatar"), require("./controller").addData);
router.post("/login", require("./controller").login);

module.exports = router;

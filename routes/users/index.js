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
  // inputUser,
  deleteByUsername,
  deleteAll,
  addData
} = require("./controller");

router.get("/", getAll);
router.get("/id/:id", getById);
router.get("/username/:username", getByUsername);
router.get("/email/:email", getByEmail);

router.put("/email/:email", updateByEmail);
// router.post("/", inputUser);

router.delete("/email/:email", deleteByEmail);
router.delete("/username/:username", deleteByUsername);
router.delete("/", deleteAll);

// router.post("/", upload.single("avatar"), require("./controller").postData);
router.post("/", addData);

// router.post("/", addData);

module.exports = router;

const express = require("express");
const router = express.Router();
const { upload } = require("../../config");

const {
  getAll,
  getOne,
  getById,
  updateByNama,
  deleteByNama
} = require("./controller");

router.post("/", upload.single("avatar"), require("./controller").addData);

router.get("/", getAll);
router.get("/id/:id", getById);
router.get("/nama/:nama", getOne);

router.put("/email/:email", updateByNama);

router.delete("/nama/:nama", deleteByNama);

module.exports = router;

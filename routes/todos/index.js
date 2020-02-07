const express = require("express");
const router = express.Router();

const {
  getAll,
  deleteById,
  deleteAll,
  addTodos,
  editById
} = require("./controller");

router.get("/", getAll);
router.delete("/:id", deleteById);
router.delete("/", deleteAll);
router.post("/", addTodos);
router.put("/:id", editById);

module.exports = router;

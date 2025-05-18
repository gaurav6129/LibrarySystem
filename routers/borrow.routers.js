const express = require("express");
const router = express.Router();
const { borrowBook } = require("../controllers/borrow.controllers");

router.post("/", borrowBook);

module.exports = router;

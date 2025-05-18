const express = require("express");
const router = express.Router();
const { borrowBook } = require("../controllers/borrow.controllers.js");

router.post("/borrow", borrowBook);

module.exports = router;

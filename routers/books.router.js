const express = require("express");
const router = express.Router();

const {createBook} = require("../controllers/kitab/books.controllers.js");
const {getAllBooks} = require("../controllers/kitab/getBooks.controllers.js");

// const { userAuth } = require("../middleware/auth");
router.post("/create", createBook);
router.get("/get", getAllBooks);

module.exports = router;

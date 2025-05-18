const Book = require("../../models/Books");

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().populate("borrowedBy");
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ error: "Server error: " + err.message });
  }
};
module.exports = {
    getAllBooks,
}
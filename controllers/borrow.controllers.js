const User = require("../models/Users");
const Book = require("../models/Books");

const borrowBook = async (req, res) => {
  const { userId, bookId } = req.body;

  try {
    const user = await User.findById(userId);
    const book = await Book.findById(bookId);

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
    if(!book){
        return res.status(404).json({ error: "Book not found." });
    }

    // Avoid duplicates
    if (!user.borrowedBooks.includes(bookId)) {
      user.borrowedBooks.push(bookId);
      await user.save();
    }

    if (!book.borrowedBy.includes(userId)) {
      book.borrowedBy.push(userId);
      await book.save();
    }

    res.status(200).json({ message: "Book borrowed successfully." });
  } catch (err) {
    res.status(500).json({ error: "Server error: " + err.message });
  }
};

module.exports = { borrowBook };

const Book = require("../../models/Books"); 

const createBook = async (req, res) => {
  // if (!req.body) {
  //   return res.status(400).json({ error: "Request body is missing." });
  // }
  const { bookName, ISBN, author, genre, publicationYear } = req.body;

  if (!bookName) {
    return res.status(400).json({ error: "bookName  are required." });
  }
  if(!ISBN){
    return res.status(400).json({ error: "ISBN are required." });
  }

  try {
    const existingBook = await Book.findOne({ ISBN });
    if (existingBook) {
      return res
        .status(400)
        .json({ error: "Book with this ISBN already exists." });
    }

    const book = new Book({
      bookName,
      ISBN,
      author,
      genre,
      publicationYear,
    });

    await book.save();

    res.status(201).json({
      message: "Book created successfully.",
      book,
    });
  } catch (error) {
    console.error("Error creating book:", error);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
};

module.exports = { createBook };

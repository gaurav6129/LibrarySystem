const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  bookName: {
    type: String,
    required: true,
  },
  ISBN: {
    type: String,
    required: true,
    unique: true,
  },
  author: String,
  genre: String,
  publicationYear: Number,

  // Array of student IDs who have borrowed this book
  borrowedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Books', bookSchema);

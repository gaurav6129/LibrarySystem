// models/Student.js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const usersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rollNumber: {
      type: String,
      required: true,
      unique: true,
    },
    emailId: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    department: String,

    borrowedBooks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Books",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", usersSchema);

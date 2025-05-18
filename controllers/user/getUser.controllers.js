const User = require("../../models/Users");

const getAllUser = async (req, res) => {
  try {
    const users = await User.find().populate("borrowedBooks");
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: "Server error: " + err.message });
  }
};
module.exports = {
  getAllUser,
};

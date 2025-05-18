const User = require("../../models/Users");
const bcrypt = require("bcrypt");
const registerUser = async (req, res) => {
  const { name, rollNumber, emailId, password, department } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ error: "All required fields must be filled." });
  }
  if (!rollNumber) {
    return res.status(400).json({ error: "Roll number must be filled." });
  }
  if (!emailId) {
    return res.status(400).json({ error: "Email ID must be filled." });
  }
  if (!password) {
    return res.status(400).json({ error: "Password must be filled." });
  }
  // if (!department) {
  //   return res.status(400).json({ error: "Department must be filled." });
  // };
  try {
    const existingUser = await User.findOne({ emailId });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      rollNumber,
      emailId,
      password: hashedPassword,
      // password,
      department,
    });

    await user.save();

    res.status(201).json({ message: "User registered successfully." });
  } catch (err) {
    res.status(500).json({ error: "Server error: " + err.message });
  }
};

module.exports = { registerUser };

const express = require("express");
const router = express.Router();
// const { userAuth } = require("../middlewares/auth.middleware");
const verifyToken = require("../middlewares/auth.middleware");

const {registerUser} = require("../controllers/user/registerUser.controllers.js");

const { loginUser } = require("../controllers/user/loginUsers.controllers.js");

const { getAllUser } = require("../controllers/user/getUser.controllers.js");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getall", getAllUser);

router.get("/profile", verifyToken, (req, res) => {
  res.status(200).json({ message: "Welcome, authorized user", user: req.user });
});

module.exports = router;

const express = require("express");
const connectDB = require("./config/database");
const dotenv = require("dotenv");
dotenv.config();

const bookRoutes = require("./routers/books.router.js");
const usersRoutes = require("./routers/users.routers.js");
const borrowRoutes = require("./routers/borrow.routers.js");
const app = express();

app.use(express.json());
// app.use(cookieParser());
app.use("/api/users", usersRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/borrow", borrowRoutes);

connectDB()
  .then(() => {
    console.log("Connected to the database");
    app.listen(3000, () => {
      console.log("server is running at port number 3000");
    });
  })
  .catch((err) => {
    console.error("Error in connecting to the database");
  });

const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const courseRoutes = require("./routes/CourseRoutes");

dotenv.config();

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Online Learning Platform API is running");
});

// Course Routes
app.use("/api/courses", courseRoutes);

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const express = require("express");
const courseRoutes = require("./routes/courseRoutes");

const app = express();

app.use(express.json());

// Course Routes
app.use("/api/courses", courseRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("Online Learning Platform Backend Running...");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
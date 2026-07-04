const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema({
  studentName: String,
  courseName: String,
  enrolledOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Enrollment", enrollmentSchema);
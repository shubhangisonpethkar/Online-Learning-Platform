const express = require("express");

const router = express.Router();

const {
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/courseController");

// Get all courses
router.get("/", getCourses);

// Get course by ID
router.get("/:id", getCourseById);

// Create new course
router.post("/", createCourse);

// Update course
router.put("/:id", updateCourse);

// Delete course
router.delete("/:id", deleteCourse);

module.exports = router;
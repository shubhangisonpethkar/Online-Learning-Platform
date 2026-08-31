const express = require("express");

const {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
} = require("../controllers/CourseController");

const router = express.Router();

// Create Course
router.post("/", createCourse);

// Get All Courses
// Search + Filter + Sort + Pagination
router.get("/", getAllCourses);

// Get Course By ID
router.get("/:id", getCourseById);

// Update Course
router.put("/:id", updateCourse);

// Delete Course
router.delete("/:id", deleteCourse);

module.exports = router;
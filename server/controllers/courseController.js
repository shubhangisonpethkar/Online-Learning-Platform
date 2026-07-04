// Get all courses
const getCourses = (req, res) => {
  res.json({
    message: "Get all courses",
  });
};

// Get course by ID
const getCourseById = (req, res) => {
  res.json({
    message: `Get course with ID: ${req.params.id}`,
  });
};

// Create course
const createCourse = (req, res) => {
  res.json({
    message: "Create new course",
  });
};

// Update course
const updateCourse = (req, res) => {
  res.json({
    message: `Update course with ID: ${req.params.id}`,
  });
};

// Delete course
const deleteCourse = (req, res) => {
  res.json({
    message: `Delete course with ID: ${req.params.id}`,
  });
};

module.exports = {
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
};
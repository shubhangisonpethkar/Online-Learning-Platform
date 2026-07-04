exports.getCourses = (req, res) => {
  res.json({ message: "Get All Courses" });
};

exports.getCourseById = (req, res) => {
  res.json({ message: `Get Course ${req.params.id}` });
};

exports.createCourse = (req, res) => {
  res.json({ message: "Course Created" });
};

exports.updateCourse = (req, res) => {
  res.json({ message: `Course ${req.params.id} Updated` });
};

exports.deleteCourse = (req, res) => {
  res.json({ message: `Course ${req.params.id} Deleted` });
};
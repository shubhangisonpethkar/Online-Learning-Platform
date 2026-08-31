const Course = require("../models/Course");

// ==========================================
// CREATE COURSE
// POST /api/courses
// ==========================================
const createCourse = async (req, res) => {
  try {
    const {
      title,
      description,
      instructor,
      category,
      level,
      duration,
    } = req.body;

    // Validation
    if (
      !title ||
      !description ||
      !instructor ||
      !category ||
      !level
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    const course = await Course.create({
      title,
      description,
      instructor,
      category,
      level,
      duration,
    });

    res.status(201).json({
      success: true,
      message: "Course created successfully",
      data: course,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ==========================================
// GET ALL COURSES
// SEARCH + FILTER + SORT + PAGINATION
// GET /api/courses
// ==========================================
const getAllCourses = async (req, res) => {
  try {
    const {
      search,
      category,
      level,
      sort = "latest",
      page = 1,
      limit = 6,
    } = req.query;

    // Build filter
    const filter = {};

    // Search by title or instructor
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { instructor: { $regex: search, $options: "i" } },
      ];
    }

    // Filter by category
    if (category) {
      filter.category = category;
    }

    // Filter by level
    if (level) {
      filter.level = level;
    }

    // Sorting
    let sortOption = { createdAt: -1 };

    if (sort === "oldest") {
      sortOption = { createdAt: 1 };
    } else if (sort === "title") {
      sortOption = { title: 1 };
    }

    // Pagination
    const pageNumber = Number(page);
    const limitNumber = Number(limit);
    const skip = (pageNumber - 1) * limitNumber;

    const courses = await Course.find(filter)
      .sort(sortOption)
      .skip(skip)
      .limit(limitNumber);

    const totalCourses = await Course.countDocuments(filter);

    res.status(200).json({
      success: true,
      totalCourses,
      currentPage: pageNumber,
      totalPages: Math.ceil(totalCourses / limitNumber),
      data: courses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ==========================================
// GET COURSE BY ID
// GET /api/courses/:id
// ==========================================
const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.status(200).json({
      success: true,
      data: course,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Invalid course ID",
    });
  }
};


// ==========================================
// UPDATE COURSE
// PUT /api/courses/:id
// ==========================================
const updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Course updated successfully",
      data: course,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


// ==========================================
// DELETE COURSE
// DELETE /api/courses/:id
// ==========================================
const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(
      req.params.id
    );

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Course deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Invalid course ID",
    });
  }
};


module.exports = {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
};
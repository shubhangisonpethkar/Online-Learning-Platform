const API_URL = "http://localhost:5000/api/courses";
const ENROLLMENT_API_URL = "http://localhost:5000/api/enrollments";

// ===============================
// GET ALL COURSES
// Search + Filter + Sort + Pagination
// ===============================
export const getCourses = async ({
  search = "",
  category = "",
  level = "",
  sort = "",
  page = 1,
  limit = 6,
} = {}) => {
  const params = new URLSearchParams();

  if (search) {
    params.append("search", search);
  }

  if (category && category !== "All") {
    params.append("category", category);
  }

  if (level && level !== "All") {
    params.append("level", level);
  }

  if (sort) {
    params.append("sort", sort);
  }

  params.append("page", page);
  params.append("limit", limit);

  const response = await fetch(
    `${API_URL}?${params.toString()}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch courses");
  }

  return response.json();
};

// ===============================
// GET COURSE BY ID
// ===============================
export const getCourseById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch course details");
  }

  return response.json();
};

// ===============================
// ENROLL IN COURSE
// ===============================
export const enrollInCourse = async (courseId, token) => {
  const response = await fetch(ENROLLMENT_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      courseId,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to enroll in course"
    );
  }

  return data;
};
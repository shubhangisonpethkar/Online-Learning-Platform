import { useState } from "react";
import CourseCard from "../components/CourseCard";
import "../styles/Courses.css";

function Courses() {
  const courses = [
    {
      id: 1,
      title: "React JS Fundamentals",
      description:
        "Learn the fundamentals of React including components, props, state and hooks.",
      instructor: "John Smith",
      category: "Frontend",
      level: "Beginner",
      duration: "6 Weeks",
    },
    {
      id: 2,
      title: "Node.js Backend Development",
      description:
        "Learn backend development using Node.js, Express.js and REST APIs.",
      instructor: "David Brown",
      category: "Backend",
      level: "Intermediate",
      duration: "8 Weeks",
    },
    {
      id: 3,
      title: "MongoDB Database",
      description:
        "Learn MongoDB database, collections, documents and CRUD operations.",
      instructor: "Sarah Wilson",
      category: "Database",
      level: "Beginner",
      duration: "5 Weeks",
    },
    {
      id: 4,
      title: "Python Programming",
      description:
        "Learn Python programming from basic concepts to advanced programming.",
      instructor: "Michael Lee",
      category: "Programming",
      level: "Beginner",
      duration: "7 Weeks",
    },
    {
      id: 5,
      title: "Advanced React",
      description:
        "Learn advanced React concepts including Context API, custom hooks and optimization.",
      instructor: "John Smith",
      category: "Frontend",
      level: "Advanced",
      duration: "6 Weeks",
    },
    {
      id: 6,
      title: "Express.js API Development",
      description:
        "Build powerful REST APIs using Express.js and Node.js.",
      instructor: "David Brown",
      category: "Backend",
      level: "Intermediate",
      duration: "5 Weeks",
    },
    {
      id: 7,
      title: "SQL Database Fundamentals",
      description:
        "Learn SQL queries, tables, relationships and database management.",
      instructor: "Emily Davis",
      category: "Database",
      level: "Beginner",
      duration: "4 Weeks",
    },
    {
      id: 8,
      title: "Java Programming",
      description:
        "Learn object-oriented programming and Java fundamentals.",
      instructor: "Robert Johnson",
      category: "Programming",
      level: "Intermediate",
      duration: "8 Weeks",
    },
  ];

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");
  const [sort, setSort] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);

  const coursesPerPage = 4;

  // Search and Filter
  let filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.instructor.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "" || course.category === category;

    const matchesLevel =
      level === "" || course.level === level;

    return matchesSearch && matchesCategory && matchesLevel;
  });

  // Sorting
  if (sort === "title-asc") {
    filteredCourses.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  } else if (sort === "title-desc") {
    filteredCourses.sort((a, b) =>
      b.title.localeCompare(a.title)
    );
  }

  // Pagination
  const totalPages = Math.ceil(
    filteredCourses.length / coursesPerPage
  );

  const startIndex =
    (currentPage - 1) * coursesPerPage;

  const currentCourses = filteredCourses.slice(
    startIndex,
    startIndex + coursesPerPage
  );

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setCurrentPage(1);
  };

  const handleLevelChange = (e) => {
    setLevel(e.target.value);
    setCurrentPage(1);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="courses-page">
      <div className="courses-header">
        <h1>📚 Explore Courses</h1>
        <p>Find the perfect course and start learning today.</p>
      </div>

      {/* Search, Filter and Sorting */}
      <div className="course-controls">
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={handleSearchChange}
        />

        <select
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="">All Categories</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Database">Database</option>
          <option value="Programming">Programming</option>
          <option value="Other">Other</option>
        </select>

        <select
          value={level}
          onChange={handleLevelChange}
        >
          <option value="">All Levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">
            Intermediate
          </option>
          <option value="Advanced">Advanced</option>
        </select>

        <select
          value={sort}
          onChange={handleSortChange}
        >
          <option value="latest">Latest Courses</option>
          <option value="title-asc">
            Title A - Z
          </option>
          <option value="title-desc">
            Title Z - A
          </option>
        </select>
      </div>

      {/* Course List */}
      {currentCourses.length > 0 ? (
        <div className="course-list">
          {currentCourses.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              instructor={course.instructor}
              category={course.category}
              level={course.level}
              duration={course.duration}
            />
          ))}
        </div>
      ) : (
        <p className="no-courses">
          No courses found.
        </p>
      )}

      {/* Pagination */}
      {totalPages > 0 && (
        <div className="pagination">
          <button
            disabled={currentPage === 1}
            onClick={() =>
              setCurrentPage(currentPage - 1)
            }
          >
            ← Previous
          </button>

          <span>
            Page {currentPage} of {totalPages}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() =>
              setCurrentPage(currentPage + 1)
            }
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}

export default Courses;
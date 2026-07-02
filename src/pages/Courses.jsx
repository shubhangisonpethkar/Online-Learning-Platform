import "../styles/Courses.css";

function Courses() {
  const courses = [
    {
      id: 1,
      title: "React.js Fundamentals",
      instructor: "John Doe",
      category: "Frontend",
      duration: "8 Weeks",
      level: "Beginner",
    },
    {
      id: 2,
      title: "Node.js Essentials",
      instructor: "Jane Smith",
      category: "Backend",
      duration: "6 Weeks",
      level: "Intermediate",
    },
    {
      id: 3,
      title: "MongoDB Basics",
      instructor: "David Miller",
      category: "Database",
      duration: "5 Weeks",
      level: "Beginner",
    },
  ];

  return (
    <div className="courses-page">

      <div className="courses-header">
        <h1>📚 Explore Courses</h1>
        <p>Find the perfect course and start learning today.</p>
      </div>

      <div className="search-section">
        <input
          type="text"
          placeholder="🔍 Search courses..."
        />

        <select>
          <option>All Categories</option>
          <option>Frontend</option>
          <option>Backend</option>
          <option>Database</option>
        </select>
      </div>

      <h2 className="recommend-title">
        ⭐ Recommended Courses
      </h2>

      <div className="course-grid">

        {courses.map((course) => (

          <div className="course-card" key={course.id}>

            <span className="badge">
              {course.category}
            </span>

            <h3>{course.title}</h3>

            <p>
              <strong>Instructor:</strong> {course.instructor}
            </p>

            <p>
              <strong>Duration:</strong> {course.duration}
            </p>

            <p>
              <strong>Level:</strong> {course.level}
            </p>

            <button>
              View Details
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Courses;
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/MyCourses.css";

function MyCourses() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const storedCourses = JSON.parse(
      localStorage.getItem("enrolledCourses") || "[]"
    );

    setEnrolledCourses(storedCourses);
  }, []);

  return (
    <div className="my-courses-page">
      <Link to="/courses" className="back-link">
        ← Back to Courses
      </Link>

      <div className="my-courses-header">
        <h1>📚 My Courses</h1>
        <p>Your enrolled courses are shown below.</p>

        {/* Enrollment Statistics */}
        <div className="enrollment-stats">
          <div className="stat-card">
            <h3>{enrolledCourses.length}</h3>
            <p>Total Enrolled Courses</p>
          </div>

          <div className="stat-card">
            <h3>
              {
                enrolledCourses.filter(
                  (course) =>
                    course.enrollmentStatus === "Enrolled"
                ).length
              }
            </h3>
            <p>Active Courses</p>
          </div>
        </div>
      </div>

      {/* Empty State */}
      {enrolledCourses.length === 0 ? (
        <div className="empty-courses">
          <h2>No Enrolled Courses Yet</h2>

          <p>
            Explore our courses and enroll to start learning.
          </p>

          <Link to="/courses">
            <button>Explore Courses</button>
          </Link>
        </div>
      ) : (
        /* Enrolled Courses */
        <div className="my-courses-list">
          {enrolledCourses.map((course) => (
            <div className="my-course-card" key={course.id}>
              <span className="my-course-category">
                📚 {course.category}
              </span>

              <h2>{course.title}</h2>

              <p>
                👨‍🏫 <strong>Instructor:</strong>{" "}
                {course.instructor}
              </p>

              <p>
                📊 <strong>Level:</strong> {course.level}
              </p>

              <p>
                ⏱ <strong>Duration:</strong>{" "}
                {course.duration}
              </p>

              <p className="enrolled-status">
                ✅ {course.enrollmentStatus || "Enrolled"}
              </p>

              {course.enrolledAt && (
                <p>
                  📅 <strong>Enrolled On:</strong>{" "}
                  {course.enrolledAt}
                </p>
              )}

              <Link to={`/course-details/${course.id}`}>
                <button>Access Course →</button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyCourses;
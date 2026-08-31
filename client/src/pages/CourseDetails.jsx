import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/CourseDetails.css";

function CourseDetail() {
  const { id } = useParams();

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
      students: ["Shubhangi", "Aarav"],
      lessons: [
        "Introduction to React",
        "Components and JSX",
        "Props",
        "State",
        "Event Handling",
        "React Hooks",
      ],
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
      students: ["Rahul", "Priya"],
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
      students: ["Aarav", "Sneha"],
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
      students: ["Riya", "Aman"],
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
      students: ["Neha", "Karan"],
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
      students: ["Rohan", "Anjali"],
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
      students: ["Vikram", "Pooja"],
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
      students: ["Aditya", "Snehal"],

      lessons: [
        "Introduction to Java",
        "Variables and Data Types",
        "Operators in Java",
        "Conditional Statements",
        "Loops",
        "Arrays",
        "Object-Oriented Programming",
        "Exception Handling",
      ],
    },
  ];

  const course = courses.find(
    (course) => course.id === Number(id)
  );

  const storedCourses = JSON.parse(
    localStorage.getItem("enrolledCourses") || "[]"
  );

  const [isEnrolled, setIsEnrolled] = useState(
    storedCourses.some(
      (item) => item.id === Number(id)
    )
  );

  const [completedLessons, setCompletedLessons] =
    useState([]);

  if (!course) {
    return (
      <div className="course-detail-page">
        <h2>Course Not Found</h2>

        <Link to="/courses">
          ← Back to Courses
        </Link>
      </div>
    );
  }

  const handleEnroll = () => {
    const enrolledCourses = JSON.parse(
      localStorage.getItem("enrolledCourses") || "[]"
    );

    const alreadyEnrolled = enrolledCourses.some(
      (item) => item.id === course.id
    );

    if (alreadyEnrolled) {
      setIsEnrolled(true);
      return;
    }

    const newEnrollment = {
      ...course,
      enrollmentStatus: "Enrolled",
      enrolledAt: new Date().toLocaleDateString(),
    };

    const updatedCourses = [
      ...enrolledCourses,
      newEnrollment,
    ];

    localStorage.setItem(
      "enrolledCourses",
      JSON.stringify(updatedCourses)
    );

    setIsEnrolled(true);
  };

  const toggleLesson = (index) => {
    if (completedLessons.includes(index)) {
      setCompletedLessons(
        completedLessons.filter(
          (lesson) => lesson !== index
        )
      );
    } else {
      setCompletedLessons([
        ...completedLessons,
        index,
      ]);
    }
  };

  const totalLessons = course.lessons
    ? course.lessons.length
    : 0;

  const progress =
    totalLessons > 0
      ? Math.round(
          (completedLessons.length / totalLessons) *
            100
        )
      : 0;

  return (
    <div className="course-detail-page">

      <div className="course-detail-container">

        <Link
          to="/courses"
          className="back-link"
        >
          ← Back to Courses
        </Link>

        <h1>{course.title}</h1>

        <div className="course-detail-card">

          <span className="course-category">
            📚 {course.category}
          </span>

          <h2>About This Course</h2>

          <p className="course-description">
            {course.description}
          </p>

          <div className="course-info">

            <p>
              👨‍🏫 <strong>Instructor:</strong>{" "}
              {course.instructor}
            </p>

            <p>
              📚 <strong>Category:</strong>{" "}
              {course.category}
            </p>

            <p>
              📊 <strong>Level:</strong>{" "}
              {course.level}
            </p>

            <p>
              ⏱ <strong>Duration:</strong>{" "}
              {course.duration}
            </p>

            <p>
              📌 <strong>
                Enrollment Status:
              </strong>{" "}
              {isEnrolled
                ? "Enrolled ✅"
                : "Not Enrolled"}
            </p>

          </div>

          {isEnrolled && course.lessons && (

            <div className="course-content">

              <h2>
                📖 Course Content
              </h2>

              <div className="progress-info">

                <span>
                  Progress: {progress}%
                </span>

                <span>
                  {completedLessons.length}/
                  {totalLessons} Completed
                </span>

              </div>

              <div className="progress-bar">

                <div
                  className="progress-fill"
                  style={{
                    width: `${progress}%`,
                  }}
                ></div>

              </div>

              {course.lessons.map(
                (lesson, index) => {

                  const isCompleted =
                    completedLessons.includes(index);

                  return (

                    <div
                      className={
                        isCompleted
                          ? "lesson-item completed"
                          : "lesson-item"
                      }
                      key={index}
                    >

                      <span className="lesson-number">

                        {isCompleted
                          ? "✓"
                          : index + 1}

                      </span>

                      <span className="lesson-title">
                        {lesson}
                      </span>

                      <button
                        className="complete-btn"
                        onClick={() =>
                          toggleLesson(index)
                        }
                      >

                        {isCompleted
                          ? "Completed ✓"
                          : "Mark Complete"}

                      </button>

                    </div>
                  );
                }
              )}

            </div>
          )}

          <div className="students-section">

            <h2>
              👥 Enrolled Students (
              {course.students.length})
            </h2>

            {course.students.map(
              (student, index) => (

                <div
                  className="student-item"
                  key={index}
                >

                  <span>
                    👤 {student}
                  </span>

                  <span className="enrolled-text">
                    Enrolled ✓
                  </span>

                </div>
              )
            )}

          </div>

          {isEnrolled ? (

            <div className="already-enrolled">

              <p>
                ✅ You are enrolled in this course.
              </p>

              <Link to="/my-courses">
                Go to My Courses →
              </Link>

            </div>

          ) : (

            <button
              className="enroll-btn"
              onClick={handleEnroll}
            >
              Enroll Now
            </button>

          )}

        </div>

      </div>

    </div>
  );
}

export default CourseDetail;
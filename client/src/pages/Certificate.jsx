import { useParams, Link } from "react-router-dom";
import "../styles/Certificate.css";

function Certificate() {
  const { id } = useParams();

  const courses = [
    {
      id: 1,
      title: "React JS Fundamentals",
      instructor: "John Smith",
    },
    {
      id: 2,
      title: "Node.js Backend Development",
      instructor: "David Brown",
    },
    {
      id: 3,
      title: "MongoDB Database",
      instructor: "Sarah Wilson",
    },
    {
      id: 4,
      title: "Python Programming",
      instructor: "Michael Lee",
    },
    {
      id: 5,
      title: "Advanced React",
      instructor: "John Smith",
    },
    {
      id: 6,
      title: "Express.js API Development",
      instructor: "David Brown",
    },
    {
      id: 7,
      title: "SQL Database Fundamentals",
      instructor: "Emily Davis",
    },
    {
      id: 8,
      title: "Java Programming",
      instructor: "Robert Johnson",
    },
  ];

  const course = courses.find(
    (course) => course.id === Number(id)
  );

  const certificateId = `OLP-${id}-${Date.now()
    .toString()
    .slice(-6)}`;

  const completionDate = new Date().toLocaleDateString();

  if (!course) {
    return (
      <div className="certificate-page">
        <h2>Course Not Found</h2>

        <Link to="/courses">
          ← Back to Courses
        </Link>
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="certificate-page">

      <div className="certificate-container">

        <div className="certificate">

          <div className="certificate-border">

            <div className="certificate-top">
              🏆
            </div>

            <h1>
              Certificate of Completion
            </h1>

            <p className="presented-text">
              This certificate is proudly presented to
            </p>

            <h2 className="student-name">
              Shubhangi
            </h2>

            <p className="completion-text">
              For successfully completing the course
            </p>

            <h2 className="course-name">
              {course.title}
            </h2>

            <p className="certificate-description">
              Congratulations on successfully completing
              all the required lessons and course content.
            </p>

            <div className="certificate-details">

              <div>
                <strong>Instructor</strong>
                <p>{course.instructor}</p>
              </div>

              <div>
                <strong>Completion Date</strong>
                <p>{completionDate}</p>
              </div>

            </div>

            <div className="certificate-footer">

              <div>
                <p className="signature-line"></p>
                <strong>Course Instructor</strong>
              </div>

              <div className="certificate-id">
                Certificate ID
                <strong>{certificateId}</strong>
              </div>

              <div>
                <p className="signature-line"></p>
                <strong>Online Learning Platform</strong>
              </div>

            </div>

          </div>

        </div>

        <div className="certificate-actions">

          <Link
            to={`/course-details/${course.id}`}
            className="back-course-btn"
          >
            ← Back to Course
          </Link>

          <button
            className="print-btn"
            onClick={handlePrint}
          >
            🖨 Print Certificate
          </button>

        </div>

      </div>

    </div>
  );
}

export default Certificate;
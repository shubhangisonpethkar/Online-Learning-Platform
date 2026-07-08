import "../styles/MyCourses.css";

function MyCourses() {
  return (
    <div className="my-courses">

      <h1>📚 My Courses</h1>

      <div className="course-container">

        <div className="course-card">

          <h2>React Fundamentals</h2>

          <p>Status: In Progress</p>

          <p>Progress: 72%</p>

          <progress value="72" max="100"></progress>

          <button>Continue Learning</button>

        </div>

        <div className="course-card">

          <h2>Node.js Essentials</h2>

          <p>Status: Completed</p>

          <p>Progress: 100%</p>

          <progress value="100" max="100"></progress>

          <button>View Certificate</button>

        </div>

      </div>

    </div>
  );
}

export default MyCourses;
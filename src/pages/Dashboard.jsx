import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <header className="dashboard-header">
        <div>
          <h1>📚 Student Dashboard</h1>
          <p>Welcome back! Continue your learning journey.</p>
        </div>

        <button className="browse-btn">Browse Courses</button>
      </header>

      <section className="stats">

        <div className="card">
          <h3>Enrolled Courses</h3>
          <h2>04</h2>
          <span>Active Courses</span>
        </div>

        <div className="card">
          <h3>Completed Lessons</h3>
          <h2>18</h2>
          <span>Lessons Finished</span>
        </div>

        <div className="card">
          <h3>Overall Progress</h3>
          <h2>72%</h2>
          <span>Learning Progress</span>
        </div>

        <div className="card">
          <h3>Certificates</h3>
          <h2>02</h2>
          <span>Achievements</span>
        </div>

      </section>

      <section className="continue-learning">

        <h2>Continue Learning</h2>

        <div className="course-card">

          <h3>React.js Fundamentals</h3>

          <p>Progress : 72%</p>

          <progress value="72" max="100"></progress>

          <button>Continue Course</button>

        </div>

      </section>

    </div>
  );
}

export default Dashboard;
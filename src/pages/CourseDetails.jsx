import "../styles/CourseDetails.css";

function CourseDetails() {
  return (
    <div className="course-details">

      <div className="hero-section">

        <div>

          <span className="tag">Frontend Development</span>

          <h1>React.js Fundamentals</h1>

          <p>
            Learn React from scratch by building real-world projects,
            understanding components, hooks, routing, and state management.
          </p>

          <div className="info">

            <span>👨‍🏫 John Doe</span>
            <span>⭐ 4.8</span>
            <span>⏱ 8 Weeks</span>
            <span>📚 24 Lessons</span>

          </div>

          <button className="enroll-btn">
            Enroll Now
          </button>

        </div>

      </div>

      <section className="content">

        <div className="left">

          <h2>Course Overview</h2>

          <p>
            This course helps beginners understand React.js through practical
            examples and projects.
          </p>

          <h2>Lessons</h2>

          <ul className="lesson-list">

            <li>Introduction to React</li>
            <li>JSX Basics</li>
            <li>Components</li>
            <li>Props & State</li>
            <li>React Hooks</li>
            <li>React Router</li>

          </ul>

        </div>

        <div className="right">

          <div className="video-card">

            <h3>Course Preview</h3>

            <div className="video-placeholder">
              ▶ Video Preview
            </div>

          </div>

          <div className="material-card">

            <h3>Study Materials</h3>

            <ul>

              <li>📄 React Notes.pdf</li>
              <li>📄 JSX Cheat Sheet.pdf</li>
              <li>📄 Project Resources.zip</li>

            </ul>

          </div>

        </div>

      </section>

    </div>
  );
}

export default CourseDetails;
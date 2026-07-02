import "../styles/Lesson.css";

function Lesson() {
  return (
    <div className="lesson-page">

      <div className="lesson-header">
        <h1>Lesson 1 - Introduction to React</h1>
        <p>Understand the basics of React and component-based development.</p>
      </div>

      <div className="lesson-content">

        <div className="video-section">
          <h2>Video Lesson</h2>

          <div className="video-placeholder">
            🎥 Video Player Placeholder
          </div>
        </div>

        <div className="notes-section">
          <h2>Study Material</h2>

          <ul>
            <li>📄 React Introduction.pdf</li>
            <li>📄 JSX Notes.pdf</li>
            <li>📄 Practice Exercises.pdf</li>
          </ul>

          <button>Download Material</button>
        </div>

      </div>

      <div className="lesson-actions">
        <button>← Previous Lesson</button>
        <button>Mark as Completed ✓</button>
        <button>Next Lesson →</button>
      </div>

    </div>
  );
}

export default Lesson;
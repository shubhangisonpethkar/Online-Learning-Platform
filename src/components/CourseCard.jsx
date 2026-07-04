import "./CourseCard.css";

function CourseCard() {
  return (
    <div className="course-card">
      <img
        src="https://via.placeholder.com/300x180"
        alt="Course"
      />
      <h3>React Fundamentals</h3>
      <p>24 Lessons</p>
      <button>Enroll Now</button>
    </div>
  );
}

export default CourseCard;
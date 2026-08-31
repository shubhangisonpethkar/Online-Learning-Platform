import { Link } from "react-router-dom";
import "../styles/CourseCard.css";

function CourseCard({
  id,
  title,
  instructor,
  category,
  level,
  duration,
}) {
  return (
    <div className="course-card">
      <div className="course-category">
        📚 {category || "General"}
      </div>

      <h2>{title}</h2>

      <p className="instructor">
        👨‍🏫 <strong>Instructor:</strong> {instructor}
      </p>

      <p className="course-level">
        📊 <strong>Level:</strong> {level}
      </p>

      <p className="course-duration">
        ⏱ <strong>Duration:</strong>{" "}
        {duration || "Not specified"}
      </p>

      <Link to={`/course-details/${id}`}>
        <button className="view-details-btn">
          View Details →
        </button>
      </Link>
    </div>
  );
}

export default CourseCard;
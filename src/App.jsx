import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Lesson from "./pages/Lesson";
import MyCourses from "./pages/MyCourses";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course-details" element={<CourseDetails />} />
        <Route path="/lesson" element={<Lesson />} />
        <Route path="/my-courses" element={<MyCourses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
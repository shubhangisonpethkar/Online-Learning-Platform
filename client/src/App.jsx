import { BrowserRouter, Routes, Route } from "react-router-dom";

import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import MyCourses from "./pages/MyCourses";
import Certificate from "./pages/Certificate";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Courses />} />

        <Route
          path="/courses"
          element={<Courses />}
        />

        <Route
          path="/course-details/:id"
          element={<CourseDetails />}
        />

        <Route
          path="/my-courses"
          element={<MyCourses />}
        />
        <Route
  path="/certificate/:id"
  element={<Certificate />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import TutorialPage from "./pages/TutorialPage";
import CoursesPage from "./pages/CoursesPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/practice" element={<TutorialPage />} />
      </Routes>
    </Router>
  );
}

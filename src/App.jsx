import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./Homepage";
import SignInPage from "./SignInPage";
import Register from "./components/Register";
import TutorialPage from "./TutorialPage";
import CoursesPage from "./components/courses/CoursesPage";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/practice" element={<TutorialPage />} />
      </Routes>
    </Router>
  );
}

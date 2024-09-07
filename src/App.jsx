import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import SignInPage from "./pages/SignInPage";
import Register from "./pages/Register";
import TutorialPage from "./pages/TutorialPage";
import CoursesPage from "./pages/CoursesPage";

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

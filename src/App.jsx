import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./Homepage";
import SignInPage from "./SignInPage";
import Register from "./components/Register";
import TutorialPage from "./TutorialPage";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/practice" element={<TutorialPage />} />
      </Routes>
    </Router>
  );
}

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MusicPlayerPage from "./pages/musicPlayer";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MusicPlayerPage />} />
      </Routes>
    </Router>
  );
}

export default App;

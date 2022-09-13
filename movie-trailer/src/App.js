import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Searched from "./Pages/Searched";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/search/:movie" element={<Searched />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

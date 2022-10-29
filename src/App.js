import {Home} from "./pages/home";
import {Categories} from "./pages/categories";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/categories" element={<Categories/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

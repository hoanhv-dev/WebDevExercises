import "./App.css";
import Counter from "./components/Counter";
import LoginForm from "./components/LoginForm";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link to="/count">
                Count
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/count" element={<Counter initValue={0}/>} />
      </Routes>
    </Router>
  );
}

export default App;

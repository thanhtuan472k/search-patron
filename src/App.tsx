import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/Login";
import SearchForm from "./components/SearchFrom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/search" element={<SearchForm />} />
      </Routes>
    </Router>
  );
}

export default App;

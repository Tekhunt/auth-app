// import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./Pages/HomePage/HomePage";
import Register from "./Components/Register/Register";
import { AuthProvider } from "./Components/AuthContext/AuthContext";
import { Login } from "./Components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<Register />} path="/register" />
            <Route element={<Login />} path="/login" />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;

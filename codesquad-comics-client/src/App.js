import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import Admin from "./components/Admin";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import Create from "./components/Create";
import Update from "./components/Update";
import Home from "./components/Home";
import About from "./components/About";
import "./index.css";

function App() {
  const [user, setUser] = useState("user");

  const updateUser = (event) => {
    setUser(event.target.value);
  };

  return (
    <div className="App">
      <Header updateUser={updateUser} user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/update" element={<Update />} />
        <Route
          path="/login"
          element={<Login updateUser={updateUser} user={user} />}
        />
        <Route path="/create" element={<Create />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

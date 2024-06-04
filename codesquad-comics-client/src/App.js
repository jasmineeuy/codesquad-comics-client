import Header from "./shared/Header";
import Footer from "./shared/Footer";
import Admin from "./components/Admin";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import "./index.css";
import { useState } from "react";
import Update from "./components/Update";

function App() {
  const [user, setUser] = useState("user");

  const updateUser = (event) => {
    setUser(event.target.value);
  };

  return (
    <div className="App">
      <Header updateUser={updateUser} user={user} />
      <Login updateUser={updateUser} user={user} />
      <SignUp />
      <Admin />
      <Update />
      <Footer />
    </div>
  );
}

export default App;

import Header from "./shared/Header";
import Footer from "./shared/Footer";
import Admin from "./components/Admin";
import Login from "./components/Login"
import "./index.css";
import { useState } from "react";
import Create from "./components/Create";

function App() {
  const [user, setUser] = useState("user");

  const updateUser = (event) => {
    setUser(event.target.value);
  };

  return (
    <div className="App">
      
      <Header 
      updateUser = {updateUser} user={user}/>
      <Login updateUser = {updateUser} user ={user}/>
      {/* <SignUp/> */}
      <Admin/>
      <Create/>
      <Footer />
    </div>
  );
}

export default App;

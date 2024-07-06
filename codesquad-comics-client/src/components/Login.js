import {React,useState} from "react";
import {  useNavigate } from "react-router-dom";

const Login = ({ updateUser, user }) => {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const userinfo = {
    username: username,
    password: password,
  };

  const handleUsername = (event) => {
    console.log(event.target.value);
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    fetch(`http://localhost:8080/login/local`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userinfo),
    })
      .then((response) => response.json())
      .then(
        (result) =>
          localStorage.setItem(
            "user",
            JSON.stringify(result.data),
            console.log("result", result)
          ),
        navigate("/admin")
      )
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <main>
        <form onSubmit={handleLogin} action="#">
          <h1>LOGIN</h1>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              onChange={handleUsername}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              onChange={handlePassword}
              required
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </main>
    </div>
  );
};

export default Login;

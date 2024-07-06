import {React,useState} from "react";


const SignUp = ({ updateUser, user }) => {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");
  const [firstName, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const userinfo = {
    firstName: firstName,
    lastName: lastName,
    username: username,
    password: password,
  };

  const handleFirstNameChange = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    console.log(event.target.value);
    setLastName(event.target.value);
  };

  const handleUsernameChange = (event) => {
    console.log(event.target.value);
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    fetch(`http://localhost:8080/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userinfo),
    })
      .then((response) => response.json())
      .then((result) =>
        localStorage.setItem(
          "user",
          JSON.stringify(result.data),
          console.log("result", result)
        )
      )
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <main>
        <form onSubmit={handleLogin} action="#">
          <h1>Sign Up</h1>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="firstName"
              onChange={handleFirstNameChange}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="lastName"
              name="lastName"
              id="lastName"
              placeholder="lastName"
              onChange={handleLastNameChange}
              required
            />
          </div>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div>
            <label htmlFor="Password">Password</label>
            <input
              type="text"
              name="password"
              id="password"
              placeholder="password"
              onChange={handlePasswordChange}
              required
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </main>
    </div>
  );
};

export default SignUp;

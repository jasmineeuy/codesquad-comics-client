import React from "react";

const loginSubmit = (event) => {
  event.preventDefault();
  console.log("the login is working");
};
const handleFormChange = (event) =>{
  console.log(event.target.value);
}

const Login = ({ updateUser, user }) => {
  return (
    <div>
      <main>
        <form onSubmit={loginSubmit} action="#">
          <h1>LOGIN</h1>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              onChange={handleFormChange}
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
              onChange={handleFormChange}
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

import React from "react";

const Login = () => {
  return (
    <div>
      <main>
        <form action="#">
          <h1>LOGIN</h1>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </main>
    </div>
  );
};

export default Login;

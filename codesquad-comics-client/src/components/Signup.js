import React from "react";

const signUpSubmit = (event) => {
  event.preventDefault();
  console.log("the sign up is working");
};
const handleSignUpFormChange = (event) =>{
  console.log(event.target.value);
}

const SignUp = ({ updateUser, user }) => {
  return (
    <div>
      <main>
        <form onSubmit={signUpSubmit} action="#">
          <h1>Sign Up</h1>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="firstName"
              onChange={handleSignUpFormChange}
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
              onChange={handleSignUpFormChange}
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
              onChange={handleSignUpFormChange}
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
              onChange={handleSignUpFormChange}
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

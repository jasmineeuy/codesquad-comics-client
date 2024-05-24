import React from "react";

const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <a href="index.html">
            <img
              src="/images/CodeSquad-Comics-logo.png"
              alt="codesquad comic logo"
            />
          </a>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="login.html">Login</a>
            </li>
          </ul>
          <i class="fa-solid fa-bars"></i>
        </nav>
      </header>
    </div>
  );
};
export default Header;

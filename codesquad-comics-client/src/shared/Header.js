import React from "react";
import { Link } from "react-router-dom";

const Header = ({ updateUser, user }) => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">
            <img
              src="/images/CodeSquad-Comics-logo.png"
              alt="codesquad comic logo"
            />
          </Link>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
          <i className="fa-solid fa-bars"></i>
        </nav>
      </header>
    </div>
  );
};
export default Header;

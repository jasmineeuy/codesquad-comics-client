import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ updateUser, user }) => {
  const [userInfo, setUser] = useState({});

  const navigate = useNavigate();

  const logOut = () =>
    (fetch("http://localhost:8080/logout"),
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);

        setUser(result.data);
        localStorage.removeItem(userInfo);
        navigate("/");
      })
      .catch((error) => {
        console.log("error", error);
        navigate("/admin");
      });

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
          </ul>
          {user.username ? (
            <ul>
              <li>
                <a href="#" onClick={logOut}>
                  LOGOUT
                </a>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          )}
          <i className="fa-solid fa-bars"></i>
        </nav>
      </header>
    </div>
  );
};
export default Header;

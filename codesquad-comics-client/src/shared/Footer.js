import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer>
        <section>
          <div>
            <h3>Visit Us</h3>
            <p>CodeSquad Comics</p>
            <p>123 Dorchester Ave</p>
            <p>Boston,MA 02124</p>
          </div>
          <div>
            <h3>Links</h3>
            <p>
              < Link to="/">Home</Link>
            </p>
            <p>
              <Link  to="/about">About</Link>
            </p>
            <p>
              <Link to="/login">Login</Link>
            </p>
          </div>
          <div>
            <h3>Follow Us</h3>
            <div className="media-icon">
              <div>
                <Link to="#" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-facebook"></i>
                </Link>
              </div>
              <div>
                <Link to="#" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-instagram"></i>
                </Link>
              </div>
              <div>
                <Link to="#" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-twitter"></i>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h3>A PRODUCT OF</h3>
            <Link
              href="http://codesquad.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/CodeSquad-logo.png"
                alt="code squad logo"
              />
            </Link>
          </div>
        </section>
      </footer>
    </div>
  );
};
export default Footer;

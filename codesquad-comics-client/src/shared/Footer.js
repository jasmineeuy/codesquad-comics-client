import React from "react";

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
              <a href="#">Home</a>
            </p>
            <p>
              <a href="#">About</a>
            </p>
            <p>
              <a href="#">Login</a>
            </p>
          </div>
          <div>
            <h3>Follow Us</h3>
            <div class="media-icon">
              <div>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i class="fa-brands fa-facebook"></i>
                </a>
              </div>
              <div>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </div>
              <div>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3>A PRODUCT OF</h3>
            <a
              href="http://codesquad.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/CodeSquad-logo.png"
                alt="code squad logo"
              />
            </a>
          </div>
        </section>
      </footer>
    </div>
  );
};
export default Footer;

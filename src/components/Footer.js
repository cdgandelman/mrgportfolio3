import React from 'react';
import './Footer.css';


function Footer() {
  return (
    <><div className='footer-container'>
          <p className='footer-subscription-heading'>
              Chad Gandelman Portfolio
          </p>
          <p className='footer-subscription-text'>
              Copyright @2023 
          </p>
              <a
                  href="https://github.com/cdgandelman"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  <img
                      src={require("../assets/github-logo.png")}
                      alt="Github"
                      className="logo"
                  ></img>
              </a>
              <a
                  href="https://www.linkedin.com/in/chad-gandelman-6b59a5119/"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  <img
                      src={require("../assets/linkedin-logo.png")}
                      alt="LinkedIn"
                      className="logo"
                  ></img>
              </a>
          </div></>
  );
}

export default Footer;
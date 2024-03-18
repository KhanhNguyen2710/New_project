import React from "react";
import "../../Style/FooterC.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Button } from "react-bootstrap";

const Footer = () => {
  return (
    <section>
      <div>
        <div className="footer">
          <div className="footer-content">
            <div className="footer-left">
              <div className="circle-logo-footer">
                <h2>L</h2>
              </div>
              <h3>lawliet</h3>
            </div>
            <div className="footer-right">
              <div>
                <h3>Products</h3>
                <p>Overview</p>
                <p>Features</p>
                <p>Tutorials</p>
                <p>Pricing</p>
                <p>Releases</p>
              </div>
              <div>
                <h3>Company</h3>
                <p>About</p>
                <p>Press</p>
                <p>Careers</p>
                <p>Contact</p>
                <p>Partners</p>
              </div>
              <div>
                <h3>Support</h3>
                <p>Help Center</p>
                <p>Terms of service</p>
                <p>Legal</p>
                <p>Privacy Policy</p>
                <p>Status</p>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div>
              <p>©2024 Final project</p>
            </div>
            <div className="social">
              <Link to="/" className="social-link">
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="lg"
                  style={{ color: "#ffffff" }}
                />
              </Link>
              <Link to="/" className="social-link">
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="lg"
                  style={{ color: "#ffffff" }}
                />
              </Link>
              <Link to="/" className="social-link">
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="lg"
                  style={{ color: "#ffffff" }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

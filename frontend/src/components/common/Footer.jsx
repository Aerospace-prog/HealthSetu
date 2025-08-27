import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ToggleMode from "../ToggleMode";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="dashboard-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@healthsetu.com</p>
          <p>Phone: +91 1234567890</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a
                href="/about"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/about");
                }}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/services"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/services");
                }}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/privacy");
                }}
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#facebook">Facebook</a>
            <a href="#twitter">Twitter</a>
            <a href="#linkedin">LinkedIn</a>
          </div>
        </div>
        <div className="footer-section github-section">
          <h3>Open Source</h3>
          <div className="github-link">
            <a
              href="https://github.com/ShridharAggrwal/HealthSetu"
              target="_blank"
              rel="noopener noreferrer"
              className="github-button"
            >
              <svg
                height="24"
                width="24"
                viewBox="0 0 16 16"
                className="github-icon"
              >
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                  fill="currentColor"
                />
              </svg>
              View on GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 HealthSetu. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

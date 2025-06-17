import React from 'react';
import './Styles.css'; // Link your external CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Bootstrap Icons

function Footer1() {
  return (
    <footer className="modern-footer mt-5">
      <div className="container text-center py-4">
        <h5 className="footer-heading mb-2">Smart Assignment System</h5>
        <p className="footer-subtitle mb-3">
          Made with ❤️ by
          <a
            href="https://github.com/shahdhairyah/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            {" "}Shah Dhairya 
          </a>
        </p>

        <div className="footer-icons mb-3">
          {/* Instagram */}
          <a
            href="https://instagram.com/shahdhairyah"
            className="icon-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-instagram"></i>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/shahdhairyah"
            className="icon-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>

          <a
            href="https://github.com/shahdhairya12"
            className="icon-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/shahdhairyah"
            className="icon-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/sdh12"
            className="icon-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/leetcode-3521542-2944960.png"
              alt="LeetCode"
              className="leetcode-icon"
            />
          </a>
        </div>

        <p className="footer-copy mb-0">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer1;

import React from "react";
import "./_footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <ul className="nav">
        <li className="nav_item">
          <a href="/#" className="nav__link">
            Find your dream house
          </a>
        </li>
        <li className="nav_item">
          <a href="/#" className="nav__link">
            Request Proposal
          </a>
        </li>
        <li className="nav_item">
          <a href="/#" className="nav__link">
            Download home planner
          </a>
        </li>
        <li className="nav_item">
          <a href="/#" className="nav__link">
            Contact us
          </a>
        </li>
        <li className="nav_item">
          <a href="/#" className="nav__link">
            Submit your property
          </a>
        </li>
        <li className="nav_item">
          <a href="/#" className="nav__link">
            Come work with us
          </a>
        </li>
      </ul>
      <p className="copyright">
        &copy; Copyright 2023 by Adebowale Damilola. Feel free to check the
        webpage out and interack with the nice interface.
      </p>
    </footer>
  );
}

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Footer = () => (
  <div id="footer">
    <div className="footerLinks">
      <a href="https://github.com/DaleLuce">
        <img
          className="footer-link-img"
          src="https://avatars.githubusercontent.com/u/52118076?v=4"
        />
      </a>

      <Link to="">Some other link</Link>
    </div>
  </div>
);

export default Footer;

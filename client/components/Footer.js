import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Footer = () => (
  <section id="footer">
    <div>
      <a href="https://github.com/DaleLuce">
        <img
          className="footer-link-img"
          src="https://avatars.githubusercontent.com/u/52118076?v=4"
        />
      </a>
      <div id="tinytext">
        <h6>
          Brought to you by Dale.<br></br>May your shoes never be soggy.
        </h6>
      </div>
    </div>
  </section>
);

export default Footer;

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

const Navbar = ({ handleClick, isLoggedIn }) => {
  return (
    <div id="navDiv">
      <h1 id="logo">Hey...could you text me if it's gonna rain?</h1>
      <nav>
        {isLoggedIn ? (
          <div className="navLinks">
            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </div>
        ) : (
          <div className="navLinks">
            <Link to="/login">Login</Link>
          </div>
        )}
      </nav>
    </div>
  );
};
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.phoneNumber,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);

import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <h1>Logo</h1>
    </Link>
    <div className="options">     
      <Link className="option" to="/history">
        History
      </Link>

      {currentUser ? (
        <div className="option">
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

export default Header;

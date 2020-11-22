import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "../api/GoogleAuth";

const Header = () => {
  return (
    <header>
      <nav className="ui secondary pointing menu">
        <Link to="/" className="item">
          Streamer
        </Link>
        <div className="right menu">
          <Link to="/" className="item">
            All Streams
          </Link>
          
          <GoogleAuth />
        </div>
      </nav>
    </header>
  );
};
export default Header;

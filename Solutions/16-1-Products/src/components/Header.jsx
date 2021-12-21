import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <div className="nav">
      <Link to="/">
        <h3>Home</h3>
      </Link>

      <Link to="/products">
        <h3>Products</h3>
      </Link>
    </div>
  );
};

export default Header;

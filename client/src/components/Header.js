import React, { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <div className="burger">
          <HiMenuAlt1 />
        </div>

        <Link to="/">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4039/4039232.png"
            alt="logo"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import "../styles/sidebar.css";
import { FaHome} from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { MdImageSearch } from "react-icons/md";
const SideBar = () => {
  return (
    <div className={`sidebar`}>
      <div className="top-icons">
        <Link to="/">
          <div className={`icon `}>
            <FaHome />
          </div>
        </Link>
        <Link to="/search">
          <div className={`icon `}>
            <FaLocationDot />
          </div>
        </Link>
        <Link to="/image-search">
          <div className={`icon `}>
            <MdImageSearch />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;

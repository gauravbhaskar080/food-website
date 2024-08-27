import React, { useState } from "react";
import "../styles/rightside.css";
import delivery from "../assests/delivery.png";
const RightSide = ({ data, show }) => {
  return (
    <div className="rightside" > 
      <div className="sidebar-msg" >
        <div className="img">
          <img src={delivery} alt="" />
        </div>
        <div className="text">
          <h2>
            Safe Delivery <span>@</span> your doors
          </h2>
        </div>
      </div>
    </div>
  );
};

export default RightSide;

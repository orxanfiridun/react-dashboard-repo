import React from "react";
import "./style.css";

const MenuLink = ({ icon, text }) => {
  return (
    <div className="component">
      <div className="chat-img">
        <img src={icon} alt={icon} />
      </div>
      <div className="title">{text}</div>
    </div>
  );
};

export default MenuLink;

import React from "react";
import "./style.css";

import MenuLink from "./MenuLink";

const SideBar = () => {
  const menus = [
    { icon: "chat.png", text: "My Wallet" },
    { icon: "chat.png", text: "My Card" },
    { icon: "chat.png", text: "Finance Chart" },
    { icon: "chat.png", text: "Recent Transactions" },
  ];

  return (
    <div className="side-component">
      <div className="header">
        <div className="ringku">
          <div className="ringku-icon">
            <img src="/img.png" alt="img.png" />
          </div>
          <div className="ringku-write">Ringku</div>
        </div>

        <div className="navbar-icon">
          <img src="/navbar.png" alt="navbar.png" />
        </div>
      </div>
      {menus.map((item, index) => (
        <MenuLink key={index} text={item.text} icon={item.icon} />
      ))}
      ;
    </div>
  );
};

export default SideBar;

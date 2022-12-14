import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SideBarData } from "./SdiebarData.jsx";
import "./sidebar.css";
function SideBar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className='navbar'>
        <div className="bar">
          <a href='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </a>
        </div>
        <div className="google" >
          <p>Google Scholar</p>
          <input type="text" />
          <button><FaIcons.FaSearch /></button>
        </div>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='navbar-toggle'>
            <a href='#' className='menu-bars'>
              <AiIcons.AiOutlineClose />
            </a>
          </li>
          {SideBarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <a href='#'>
                  {item.icon}
                  <span>{item.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default SideBar;

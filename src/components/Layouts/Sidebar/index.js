import React from "react";
import SidebarLogo from "./SidebarLogo";
import SidebarMenu from "./SidebarMenu";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <nav className={`vertical-sidebar ${sidebarOpen ? "semi-nav" : ""}`}>
      <SidebarLogo sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      <SidebarMenu />
      <div className="menu-navs">
        <span className="menu-previous">
          <i className="ti ti-chevron-left"></i>
        </span>
        <span className="menu-next">
          <i className="ti ti-chevron-right"></i>
        </span>
      </div>
    </nav>
  );
};

export default Sidebar;

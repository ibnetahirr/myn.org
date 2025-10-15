import React from "react";
import Scrollbar from "simplebar-react";
import MenuItem from "./MenuItem";
import { MenuList } from "../menu";

const SidebarMenu = () => {
  return (
    <Scrollbar className="app-nav simplebar-scrollable-y" id="app-simple-bar">
      <ul className="main-nav p-0 mt-2">
        {MenuList.map((opt, index) => (
          <MenuItem
            key={index}
            title={opt.title}
            type={opt.type}
            path={opt.path}
            name={opt.name}
            iconClass={opt.iconClass}
            badgeCount={opt.badgeCount}
            links={opt.children}
            collapseId={opt.collapseId}
          />
        ))}
      </ul>
    </Scrollbar>
  );
};

export default SidebarMenu;

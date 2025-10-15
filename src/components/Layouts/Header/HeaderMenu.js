import React from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

const HeaderMenu = () => {
  const { logout } = useAuth();

  return (
    <ul className="d-flex align-items-center">
      <li className="header-profile">
        <Link
          href="#"
          className="d-block head-icon text-danger d-flex align-items-center"
          onClick={(e) => {
            e.preventDefault();
            logout();
          }}
        >
          <i className="ph-duotone ph-sign-out pe-1 f-s-20"></i>
        </Link>
      </li>
    </ul>
  );
};

export default HeaderMenu;

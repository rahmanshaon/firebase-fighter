import React from "react";
import { NavLink } from "react-router";

const NavLinkLists = () => {
  const activeLinkStyle = {
    color: "#ffffff",
    borderBottom: "2px solid #ffffff",
    paddingBottom: "4px",
    borderRadius: 0,
    fontWeight: 600,
  };

  return (
    <>
      <li className="font-medium">
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
        >
          Home
        </NavLink>
      </li>
      <li className="font-medium">
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
        >
          About
        </NavLink>
      </li>
      <li className="font-medium">
        <NavLink
          to="/profile"
          style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
        >
          Profile
        </NavLink>
      </li>
    </>
  );
};

export default NavLinkLists;

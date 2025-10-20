import React from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import NavLinkLists from "./NavLinkLists";
import { Link } from "react-router";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="shadow-sm">
      <nav className="navbar container mx-auto px-4">
        {/* Left Side: Logo */}
        <div className="navbar-start">
          {/* Dropdown Menu */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <HiMenuAlt1 className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-2"
            >
              <NavLinkLists />
            </ul>
          </div>

          {/* Logo and Site Name */}
          <Link to="/" className="flex items-center gap-2 text-xl font-bold">
            <img src={logo} alt="Logo" className="w-8 h-8" />
          </Link>
        </div>

        {/* Center: Large Screen Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-6">
            <NavLinkLists />
          </ul>
        </div>

        {/* Right Side: Contribute Button */}
        <div className="navbar-end">
          <Link
            to="/signin"
            className="btn text-white border-none shadow-none bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-500 ease-in-out rounded-full px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base"
          >
            Sign in
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

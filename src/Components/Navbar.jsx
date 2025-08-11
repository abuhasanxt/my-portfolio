import React from "react";
import { NavLink } from "react-router";
import logo from "../assets/Abu hasan 1122.jpg";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink>About</NavLink>
      </li>
      <li>
        <NavLink>Skills</NavLink>
      </li>
      <li>
        <NavLink>Project</NavLink>
      </li>
      <li>
        <NavLink>Contact</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <img className="w-10 h-10 rounded-full" src={logo} alt="" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <img
            className="hidden lg:block w-10 h-10 rounded mr-2"
            src={logo}
            alt=""
          />
          <span className="btn btn-ghost text-xl">Abu Hasan</span>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-2 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-lg shadow-md transition"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

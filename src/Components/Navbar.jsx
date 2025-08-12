import React from "react";


import logo from "../assets/Abu hasan 1122.jpg";

const Navbar = () => {
  const links = (
    <>
      <li>
        <a href="#home" className="hover:text-teal-500 transition"
          onClick={(e) => {
      document.querySelectorAll("a").forEach(el => el.classList.remove("underline", "text-teal-500"));
      e.target.classList.add("underline", "text-teal-500");
    }}>
          Home
        </a>
      </li>
      <li>
        <a
          href="#about"
          className="hover:text-teal-500 transition"
          onClick={(e) => {
            document
              .querySelectorAll("a")
              .forEach((el) =>
                el.classList.remove("underline", "text-teal-500")
              );
            e.target.classList.add("underline", "text-teal-500");
          }}
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#skill"
          className="hover:text-teal-500 transition"
          onClick={(e) => {
            document
              .querySelectorAll("a")
              .forEach((el) =>
                el.classList.remove("underline", "text-teal-500")
              );
            e.target.classList.add("underline", "text-teal-500");
          }}
        >
          Skills
        </a>
      </li>
      <li>
        <a
          href="#project"
          className="hover:text-teal-500 transition"
          onClick={(e) => {
            document
              .querySelectorAll("a")
              .forEach((el) =>
                el.classList.remove("underline", "text-teal-500")
              );
            e.target.classList.add("underline", "text-teal-500");
          }}
        >
          Project
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className="hover:text-teal-500 transition"
          onClick={(e) => {
            document
              .querySelectorAll("a")
              .forEach((el) =>
                el.classList.remove("underline", "text-teal-500")
              );
            e.target.classList.add("underline", "text-teal-500");
          }}
        >
          Contact
        </a>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-base-100 shadow-md">
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
            href="/https://i.ibb.co.com/mr35BqqK/error.jpg"
            download="https://i.ibb.co.com/mr35BqqK/error.jpg"
            className="px-5 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-lg shadow-md transition"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

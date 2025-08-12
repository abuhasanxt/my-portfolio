import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";
import logo from "../assets/Abu hasan 1122.jpg";
const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
      <aside>
        <img className="w-20 h-20 rounded-full" src={logo} alt="" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
          Hi, I'm{" "}
          <span className="text-teal-500 drop-shadow-sm">Abu Hasan</span>
        </h1>
        <p className="mt-3 text-lg md:text-xl text-gray-600">
          Frontend Developer <span className="text-gray-400">|</span> React.js
          Enthusiast
        </p>
        <p className="mt-2 text-gray-500">
          I craft visually appealing, user-friendly websites that bring ideas to
          life.
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          {/* Social Links */}

          <Link
            to="https://github.com/abuhasanxt"
            className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full shadow-sm transition"
          >
            <FaGithub size={20} className="text-gray-700" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/abu-hasan8"
            className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full shadow-sm transition"
          >
            <FaLinkedin size={20} className="text-blue-700" />
          </Link>
          <Link
            to="https://web.facebook.com/abuhasanxyz8"
            className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full shadow-sm transition"
          >
            <BsFacebook size={20} className="text-sky-500" />
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;

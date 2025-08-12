import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";
import logo from "../assets/Abu hasan 1122.jpg";

const Banner = () => {
  return (
    <section
      id="home"
      className="relative min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6 md:px-12 py-16 bg-gradient-to-br from-gray-50 via-white to-teal-50"
    >
      {/* ===== Left Content ===== */}
      <div className="flex-1 text-center md:text-left">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
          Hi, I'm{" "}
          <span className="text-teal-500 drop-shadow-sm">Abu Hasan</span>
        </h1>

        {/* Role with Typewriter Animation */}
        <p className="mt-3 text-teal-600 text-lg md:text-xl ">
          <Typewriter
            words={[
              "Frontend Developer",
              "MERN Developer",
              "React.js Enthusiast",
              "Full Stack Learner",
            ]}
            loop={0} // infinite
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>

        {/* Short Description */}
        <p className="mt-2 text-gray-500">
          I craft visually appealing, user-friendly websites that bring ideas to
          life.
        </p>

        {/* Social Links */}
        <div className="mt-6 flex justify-center md:justify-start space-x-4">
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

        {/* Resume Button */}
       <div className="mt-6">
  <a
    href="/https://i.ibb.co.com/mr35BqqK/error.jpg"
    download="https://i.ibb.co.com/mr35BqqK/error.jpg" 
    className="px-5 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-lg shadow-md transition"
  >
    Resume
  </a>
</div>

      </div>

      {/* ===== Right Content - Profile Image ===== */}
      <div className="flex-1 flex justify-center md:justify-end">
        <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg border-4 border-teal-200 group">
          <img
            src={logo}
            alt="profile"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;

import React, { useEffect } from "react";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-6 py-12 bg-white rounded-2xl shadow-lg"
    >
      <h2
        className="text-3xl font-extrabold text-gray-800 mb-8 text-center"
        data-aos="fade-down"
      >
        Contact Me
      </h2>

      <div className="grid gap-10 md:grid-cols-2">
        {/* Contact Info */}
        <div className="space-y-6 text-gray-700" data-aos="fade-right">
          <p className="flex items-center gap-3 text-lg">
            <AiOutlineMail className="text-teal-500 text-2xl" />
            Email:{" "}
            <a
              href="mailto:abuhasaxt@gmail.com"
              className="text-teal-500 hover:underline"
            >
              abuhasaxt@gmail.com
            </a>
          </p>
          <p className="flex items-center gap-3 text-lg">
            <AiOutlinePhone className="text-teal-500 text-2xl" />
            Phone:{" "}
            <a
              href="tel:+8801723347568"
              className="text-teal-500 hover:underline"
            >
              +8801723347568
            </a>
          </p>
          <p className="flex items-center gap-3 text-lg">
            <AiOutlineWhatsApp className="text-teal-500 text-2xl" />
            WhatsApp:{" "}
            <a
              href="https://wa.me/8801723347568"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:underline"
            >
              +8801723347568
            </a>
          </p>

          {/* Social Links */}

          <div className="mt-6 flex justify-start  space-x-4">
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
        </div>

        {/* Contact Form */}
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent!");
          }}
          data-aos="fade-left"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="mt-1 w-full rounded-md border border-gray-300 p-3 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              className="mt-1 w-full rounded-md border border-gray-300 p-3 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Your message"
              className="mt-1 w-full rounded-md border border-gray-300 p-3 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-500 text-white font-semibold rounded-md py-3 hover:bg-teal-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 relative inline-block">
          About Me
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-teal-500 rounded"></span>
        </h2>

        {/* About Content */}
        <div className="mt-10 bg-white shadow-lg rounded-xl p-8 md:p-12 text-left space-y-5 border border-gray-100">
          <p className="text-gray-700 leading-relaxed">
            I'm <span className="font-semibold text-teal-500">Abu Hasan</span>.
            I started learning programming in university when I first created a
            web page using HTML and CSS. Later, learning{" "}
            <span className="font-medium text-gray-800">JavaScript</span> and{" "}
            <span className="font-medium text-gray-800">React</span> sparked a
            deep interest in frontend development.
          </p>

          <p className="text-gray-700 leading-relaxed">
            I love building{" "}
            <span className="text-teal-500 font-medium">UI/UX-friendly</span>{" "}
            and <span className="font-medium">responsive</span> web
            applications. Learning new things and solving problems are my
            favorite parts of the work I do.
          </p>

          <p className="text-gray-700 leading-relaxed">
            My hobbies include playing football, creating digital art, and
            reading books.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const skillGroups = [
    {
      title: "Frontend",
      items: [
        { name: "HTML", value: 90 },
        { name: "CSS", value: 85 },
        { name: "JavaScript", value: 80 },
        { name: "React", value: 80 },
      ],
    },
    {
      title: "Backend & Tools",
      items: [
        { name: "Node.js", value: 60 },
        { name: "Express", value: 60 },
        { name: "MongoDB", value: 55 },
        { name: "Git", value: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Title */}
        <h2
          className="text-4xl  md:text-5xl font-extrabold text-center text-gray-800 relative inline-block"
          data-aos="fade-down"
        >
          Skills
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-teal-500 rounded"></span>
        </h2>

        {/* Skill Cards */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {skillGroups.map((group, idx) => (
            <div
              key={group.title}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                {group.title}
              </h3>
              <div className="space-y-4">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm font-medium">
                      <span className="text-gray-600">{skill.name}</span>
                      <span className="text-gray-500">{skill.value}%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden mt-1">
                      <div
                        className="h-3 bg-teal-500 rounded-full transition-all duration-700 ease-out"
                        style={{ width: `${skill.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

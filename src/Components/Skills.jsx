import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGithub,
  SiFirebase,
  SiAxios,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skills = [
  {
    title: "Frontend",
    icon: "💻",
    items: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-500" />,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
      },
      { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
    ],
  },
  {
    title: "Backend & Database",
    icon: "🗄️",
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-600" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "🛠️",
    items: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub", icon: <SiGithub className="text-gray-800" /> },
      {
        name: "Firebase Auth",
        icon: <SiFirebase className="text-yellow-500" />,
      },
      { name: "Axios", icon: <SiAxios className="text-blue-500" /> },
      { name: "Vercel", icon: <SiVercel className="text-black" /> },
      { name: "Netlify", icon: <SiNetlify className="text-green-500" /> },
      { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skill" className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">💡 My Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
                <span>{group.icon}</span> {group.title}
              </h3>
              <ul className="space-y-3">
                {group.items.map((skill, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-gray-700 hover:text-teal-500 transition"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

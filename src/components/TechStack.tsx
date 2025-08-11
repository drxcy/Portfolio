import { useState } from "react";
import { FaWordpress, FaReact, FaJs, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";

const techStack = [
  { name: "WordPress", percent: "40%", icon: FaWordpress, color: "#21759b", hoverBg: "#27272a" },
  { name: "React", percent: "95%", icon: FaReact, color: "#61DBFB", hoverBg: "#27272a" },
  { name: "JavaScript", percent: "99%", icon: FaJs, color: "#F7DF1E", hoverBg: "#27272a" },
  { name: "Next.js", percent: "90%", icon: SiNextdotjs, color:"white", hoverBg: "#27272a" },
  { name: "Tailwind CSS", percent: "90%", icon: SiTailwindcss, color: "#38B2AC", hoverBg: "#27272a" },
  { name: "Express.js", percent: "80%", icon: SiExpress, color: "white", hoverBg: "#27272a" },
  { name: "MongoDB", percent: "85%", icon: SiMongodb, color: "#47A248", hoverBg: "#27272a" },
  { name: "Node.js", percent: "95%", icon: FaNodeJs, color: "#68A063", hoverBg: "#27272a" },
];

export default function TechStack() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Tech Used </h2>
          <p className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            Why Web Services is The Right Choice for You
          </p>
        </div>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {techStack.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={index}
              className={`rounded-xl p-6 text-center transition-colors duration-300 shadow-md hover:shadow-lg cursor-pointer`}
              style={{
                backgroundColor: hovered === index ? tech.hoverBg : "#f3f4f6",
              }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className="transition-transform duration-300 ease-out"
                style={{
                  transform: hovered === index ? "scale(1.3)" : "scale(1)",
                }}
              >
                <Icon
                  size={50}
                  color={hovered === index ? tech.color : "#000000"}
                  className="mx-auto"
                />
              </div>
              <p className={`text-lg font-semibold mt-4 ${hovered === index ? "text-white" : "text-black"}`}>
                {tech.percent}
              </p>
              <p className={`font-medium mt-1 ${hovered === index ? "text-white" : "text-purple-600"}`}>
                {tech.name}
              </p>
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
}

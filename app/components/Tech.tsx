"use client";
import { skills } from "@/app/constants";
import { SectionWrapper } from "./HigherOrderComponents";
import { motion } from "framer-motion";
import { textVariant } from "@/app/utils/motion";

const gradients = [
  "text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500",
  "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600",
  "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500",
  "text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-500",
  "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500",
];

const Tech = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-12">
      <motion.div variants={textVariant()}>
        <h2 className="sectionHeadText">Skills</h2>
      </motion.div>
      {Object.entries(skills).map(([category, items], catIdx) => (
        <div key={category}>
          <h2
            className={`text-3xl font-bold ${
              gradients[catIdx % gradients.length]
            } mb-6 capitalize`}
          >
            {category.replace(/_/g, " & ")}
          </h2>
          <div className="flex flex-wrap gap-4">
            {items.map((skill, idx) => (
              <div
                key={idx}
                className={`px-4 py-2 rounded-xl shadow-lg text-lg font-medium ${
                  gradients[idx % gradients.length]
                } bg-gray-800 hover:bg-gray-700 hover:scale-105 transition-transform duration-200 ease-in-out`}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");

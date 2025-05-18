import { Element } from "react-scroll";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <Element name="projects">
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.8 }}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
          My Projects
        </h2>
        <p className="text-lg text-zinc-700 dark:text-zinc-300 max-w-3xl mx-auto">
          Showcasing my latest work and passion projects
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {PROJECTS.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-zinc-800/50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-zinc-100 dark:border-zinc-700/50 flex flex-col gap-4 group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut"
            }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
              {item.name}
            </h3>
            <p className="text-zinc-700 dark:text-zinc-300">
              {item.description}
            </p>
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-white mb-2">
                Core Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {item.tools.map((tool, toolIndex) => (
                  <span 
                    key={toolIndex}
                    className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm px-3 py-1 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Element>
  );
}
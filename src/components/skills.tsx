import { Element } from "react-scroll";
import { TECHNOLOGIES } from "../constants";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <Element name="skills">
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.8 }}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
          Technical Expertise
        </h2>
        <p className="text-lg text-zinc-700 dark:text-zinc-300 max-w-3xl mx-auto">
          The cutting-edge technologies that power my development solutions
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 sm:gap-6">
        {TECHNOLOGIES.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-zinc-800/50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-4 border border-zinc-100 dark:border-zinc-700/50 flex flex-col items-center sm:flex-row sm:items-center gap-3 group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5,
              delay: index * 0.05,
              ease: "easeOut"
            }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/50 transition-colors duration-300">
              <item.icon className="w-5 h-5" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <span className="font-medium text-zinc-900 dark:text-white">{item.name}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </Element>
  );
}
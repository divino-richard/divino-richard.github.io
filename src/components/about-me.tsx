import { ABOUT_ME } from "../constants";
import ProfilePicture from '../assets/profile-picture.png';
import { Element } from "react-scroll";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <Element name="about-me">
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.8 }}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
          {ABOUT_ME.title}
        </h2>
        <p className="text-lg text-zinc-700 dark:text-zinc-300 max-w-3xl mx-auto">
          Get to know the person behind the projects
        </p>
      </motion.div>

      <motion.div 
        className="bg-white dark:bg-zinc-800/50 rounded-xl shadow-sm border border-zinc-100 dark:border-zinc-700/50 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start mb-6">
            <motion.div
              className="flex-shrink-0"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <img 
                src={ProfilePicture} 
                alt="Profile Picture"
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white dark:border-zinc-700 shadow-md object-cover"
              />
            </motion.div>
            
            <div className="flex-1 space-y-4 text-zinc-700 dark:text-zinc-300">
              {ABOUT_ME.paragraphs.map((item, index) => (
                <motion.p 
                  key={index}
                  className="leading-relaxed"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: 0.4 + (index * 0.1),
                    duration: 0.5
                  }}
                >
                  {item}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Element>
  );
}
import { PiMapPinLight } from "react-icons/pi";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { CONTACT_ITEMS } from "../constants";

export default function Contact() {
  
  return (
    <Element name="contact">
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.8 }}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
          Get in Touch
        </h2>
        <p className="text-lg text-zinc-700 dark:text-zinc-300 max-w-3xl mx-auto">
          Let's collaborate and make magic happen together
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
        {CONTACT_ITEMS.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target={item.icon === PiMapPinLight ? "_blank" : undefined}
            rel={item.icon === PiMapPinLight ? "noopener noreferrer" : undefined}
            className="group h-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut"
            }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-col items-center text-center gap-4 h-full bg-white dark:bg-zinc-800/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-zinc-100 dark:border-zinc-700/50">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/50 transition-colors duration-300">
                <item.icon className="w-6 h-6" />
              </div>
              <div className="flex-1 flex items-center text-zinc-900 dark:text-white break-words">
                {item.text}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </Element>
  );
}

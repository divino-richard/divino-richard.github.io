import { FiPhone, FiMail } from 'react-icons/fi';
import ProfilePicture from '../assets/profile-picture.png';
import { Element, Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { MY_EMAIL } from '../constants';

export default function HeroSection() {
  const startDate = new Date("2023-11-08");

  const yearsOfExperience = useMemo(() => {
    const now = new Date();
    const diff = now.getTime() - startDate.getTime(); // Convert dates to milliseconds
    const years = diff / (1000 * 60 * 60 * 24 * 365.25); // 365.25 accounts for leap years
    return years.toFixed(1); // 1 decimal precision
  }, [startDate]);

  return (
    <Element 
      className="relative p-8"
      name="home"
    > 
      <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
        {/* Content Column */}
        <div className="flex-1 space-y-8">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium rounded-full tracking-wide">
              Full Stack Developer
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-white">
              I'm Richard Divino
            </h2>
          </motion.div>
          
          <motion.div 
            className="text-lg text-zinc-700 dark:text-zinc-300 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.5, delay: 0.1 }}
          >
            Your partner in building tailored digital solutions that are both technically sound and creatively inspired, delivering exceptional user experiences across the modern web ecosystem.
          </motion.div>
          
          <motion.div
            className="flex flex-wrap gap-4 pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="contact" 
              spy={true} 
              smooth={true} 
              offset={-65} 
              duration={500}
              className="inline-block"
              onClick={() => console.log("Clicked")}
            >
              <motion.button 
                className="flex items-center gap-2.5 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-indigo-400"
                whileHover={{ scale: 1.02 }}
              >
                <FiPhone className="w-5 h-5" />
                <span className="font-medium">Get in Touch</span>
              </motion.button>
            </Link>
            
            <motion.a 
              href={`mailto:${MY_EMAIL}`} 
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-zinc-300 focus:ring-offset-2 dark:focus:ring-zinc-700"
              whileHover={{ scale: 1.02 }}
            >
              <FiMail className="w-5 h-5" />
              <span>Send Email</span>
            </motion.a>
          </motion.div>
          
          <motion.div
            className="pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center gap-4">
              <div className="h-px bg-zinc-200 dark:bg-zinc-700 w-12"></div>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">Tech Stack Highlight</p>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              {['React', 'Node.js', 'TypeScript', 'AWS', 'SQL', 'NoSQL'].map((tech, index) => (
                <motion.span 
                  key={index}
                  className="px-3 py-1.5 bg-white dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300 text-sm rounded-md border border-zinc-100 dark:border-zinc-700/50 shadow-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.05), ease: "easeOut" }}
                  whileHover={{ scale: 1.02 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Image Column */}
        <div className="flex justify-center md:justify-end">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ease: "easeOut", duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-tr from-indigo-300 to-indigo-100 dark:from-indigo-700 dark:to-indigo-600 rounded-full blur opacity-70"></div>
            <div className="relative bg-white dark:bg-zinc-800 p-1.5 rounded-full shadow-xl">
              <img 
                src={ProfilePicture} 
                alt="Richard Divino profile picture"
                className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] rounded-full object-cover"
              />
            </div>
            <motion.div 
              className="absolute -bottom-2 -right-2 bg-white dark:bg-zinc-800/50 px-3 py-1.5 rounded-full shadow-md border border-zinc-100 dark:border-zinc-700/50"
              whileHover={{ scale: 1.05 }}
            >
              <span className="font-medium text-sm text-zinc-700 dark:text-zinc-300">
                {yearsOfExperience}+ Years Exp.
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Element>
  );
}
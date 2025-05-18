import { NAVIGATION_ITEMS, SocialLinks } from "../constants";
import { useState, useEffect } from "react";
import { NavigationItem } from "../interfaces";
import { useTheme } from "../providers/theme-provider";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FiSun, FiMoon } from "react-icons/fi";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

export default function TopBar() {
  const {darkMode, toggleTheme} = useTheme();
  const [activeNavItem, setActiveNavItem] = useState<NavigationItem | null>(null);
  const [showPopupMenu, setShowPopupMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for subtle background transition
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <div 
      className={`
        w-full max-w-7xl mx-auto flex items-center z-50 justify-between 
        py-4 px-4 sm:px-6 lg:px-8 sticky top-0 transition-all duration-300 rounded-lg mb-2
        ${scrolled 
          ? "bg-white/90 dark:bg-zinc-900/90 sm:backdrop-blur-sm shadow-md" 
          : "bg-white/70 dark:bg-zinc-900/70 backdrop-blur-none shadow-sm"}
      `}
    >
      {/* Mobile Menu Button */}
      <motion.div 
        className="sm:hidden block text-zinc-900 dark:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.button 
          onClick={() => setShowPopupMenu(true)}
          className="p-1 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          aria-label="Open menu"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <HiOutlineMenuAlt3 size={24} />
        </motion.button>
      </motion.div>

      {/* Logo/Brand area */}
      <motion.div 
        className="hidden sm:block font-medium text-lg tracking-tight text-zinc-900 dark:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span className="cursor-pointer">RD Portfolio</span>
      </motion.div>

      {/* Desktop Navigation */}
      <div className="text-sm sm:flex hidden items-center gap-8">
        {NAVIGATION_ITEMS.map((navItem, index) => (
          <motion.div
            key={index} 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
          >
            <Link
              to={navItem.value} 
              spy={true} 
              smooth={true} 
              offset={-65} 
              duration={500} 
              className={`
                relative font-medium px-1 py-2
                ${activeNavItem?.value === navItem.value 
                  ? "text-indigo-600 dark:text-indigo-400" 
                  : "text-zinc-600 dark:text-zinc-300"}
                hover:text-indigo-600 dark:hover:text-indigo-400 
                transition-colors duration-200 cursor-pointer
                after:content-[''] after:absolute after:bottom-0 after:left-0 
                after:h-0.5 after:bg-indigo-600 dark:after:bg-indigo-400 
                after:w-0 hover:after:w-full after:transition-all after:duration-300
              `}
              onClick={() => setActiveNavItem(navItem)}
              onSetActive={() => setActiveNavItem(navItem)}
            >
              {navItem.label}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Mobile Menu Popup */}
      <AnimatePresence>
        {showPopupMenu && (
          <motion.div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div 
              className="h-full w-full max-w-xs bg-white dark:bg-zinc-900 shadow-lg"
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ ease: "easeOut", duration: 0.3 }}
            >
              <div className="flex justify-between items-center p-6 border-b border-zinc-100 dark:border-zinc-800">
                <span className="font-medium text-zinc-900 dark:text-white">Menu</span>
                <motion.button 
                  onClick={() => setShowPopupMenu(false)}
                  className="p-1 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  aria-label="Close menu"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <HiOutlineX size={24} className="text-zinc-900 dark:text-white" />
                </motion.button>
              </div>
              <div className="p-6 flex flex-col space-y-4">
                {NAVIGATION_ITEMS.map((navItem, index) => (
                  <motion.div
                    key={index} 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeOut", delay: index * 0.05, duration: 0.5 }}
                  >
                    <Link
                      to={navItem.value} 
                      spy={true} 
                      smooth={true} 
                      offset={-65} 
                      duration={500} 
                      className={`
                        block py-2 px-3 rounded-md text-base font-medium
                        ${activeNavItem?.value === navItem.value 
                          ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400" 
                          : "text-zinc-600 dark:text-zinc-300"}
                        hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400
                        transition-colors duration-200 cursor-pointer
                      `}
                      onClick={() => {
                        setActiveNavItem(navItem);
                        setShowPopupMenu(false);
                      }}
                    >
                      {navItem.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Right Side Controls */}
      <motion.div 
        className="flex items-center gap-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5, delay: 0.3 }}
      >
        <motion.button 
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {darkMode ? (
            <FiSun className="text-lg text-zinc-300 hover:text-white transition-colors" />
          ) : (
            <FiMoon className="text-lg text-zinc-600 hover:text-zinc-900 transition-colors" />
          )}
        </motion.button>
        <div className="border-l border-zinc-200 dark:border-zinc-700 h-6"></div>
        <div className="flex items-center gap-4">
          <motion.a 
            href={SocialLinks.Github} 
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="GitHub profile"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AiFillGithub
              className="text-lg text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
            />
          </motion.a>
          <motion.a 
            href={SocialLinks.LinkedIn} 
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="LinkedIn profile"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AiFillLinkedin 
              className="text-lg text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
            />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
import { NAVIGATION_ITEMS, SocialLinks } from "../constants";
import { useState, useEffect } from "react";
import { NavigationItem } from "../interfaces";
import { useTheme } from "../providers/theme-provider";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FiSun, FiMoon } from "react-icons/fi";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { Link } from "react-scroll";
import AnimatedDiv from "./animated-div";

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
        w-full max-w-[1200px] m-auto flex items-center z-50 justify-between 
        py-4 px-6 sticky top-0 transition-all duration-300 rounded-lg mb-2
        ${scrolled 
          ? "bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm shadow-md" 
          : "bg-white/70 dark:bg-zinc-900/70 backdrop-blur-none shadow-sm"}
      `}
    >
      {/* Logo/Brand area */}
      <div className="font-medium text-lg tracking-tight text-zinc-900 dark:text-white">
        <span className="cursor-pointer">Portfolio</span>
      </div>

      {/* Desktop Navigation */}
      <div className="text-sm sm:flex hidden items-center gap-8">
        {NAVIGATION_ITEMS.map((navItem, index) => (
          <AnimatedDiv
            key={index} 
            animate={{ opacity: [0, 1] }}
            transition={{ ease: "easeOut", delay: index * 0.05 }}
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
                  ? "text-zinc-900 dark:text-white" 
                  : "text-zinc-600 dark:text-zinc-300"}
                hover:text-zinc-900 dark:hover:text-white 
                transition-colors duration-200 cursor-pointer
                after:content-[''] after:absolute after:bottom-0 after:left-0 
                after:h-0.5 after:bg-zinc-900 dark:after:bg-white 
                after:w-0 hover:after:w-full after:transition-all after:duration-300
              `}
              onClick={() => setActiveNavItem(navItem)}
              onSetActive={() => setActiveNavItem(navItem)}
            >
              {navItem.label}
            </Link>
          </AnimatedDiv>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <AnimatedDiv 
        className="sm:hidden block text-zinc-900 dark:text-white"
        animate={{ opacity: [0, 1] }}
        transition={{ ease: "easeOut", delay: 0.1 }}
      >
        <button 
          onClick={() => setShowPopupMenu(true)}
          className="p-1 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          aria-label="Open menu"
        >
          <HiOutlineMenuAlt3 size={24} />
        </button>
      </AnimatedDiv>

      {/* Mobile Menu Popup */}
      {showPopupMenu && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-end">
          <AnimatedDiv 
            className="h-full w-full max-w-xs bg-white dark:bg-zinc-900 shadow-lg"
            animate={{ x: [300, 0], opacity: [0, 1] }}
            transition={{ ease: "easeOut", duration: 0.3 }}
          >
            <div className="flex justify-between items-center p-6 border-b border-zinc-100 dark:border-zinc-800">
              <span className="font-medium text-zinc-900 dark:text-white">Menu</span>
              <button 
                onClick={() => setShowPopupMenu(false)}
                className="p-1 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                aria-label="Close menu"
              >
                <HiOutlineX size={24} className="text-zinc-900 dark:text-white" />
              </button>
            </div>
            <div className="p-6 flex flex-col space-y-4">
              {NAVIGATION_ITEMS.map((navItem, index) => (
                <AnimatedDiv
                  key={index} 
                  animate={{ opacity: [0, 1], x: [-20, 0] }}
                  transition={{ ease: "easeOut", delay: index * 0.05 }}
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
                        ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white" 
                        : "text-zinc-600 dark:text-zinc-300"}
                      hover:bg-zinc-100 dark:hover:bg-zinc-800
                      transition-colors duration-200 cursor-pointer
                    `}
                    onClick={() => {
                      setActiveNavItem(navItem);
                      setShowPopupMenu(false);
                    }}
                  >
                    {navItem.label}
                  </Link>
                </AnimatedDiv>
              ))}
            </div>
          </AnimatedDiv>
        </div>
      )}

      {/* Right Side Controls */}
      <AnimatedDiv 
        className="flex items-center gap-5"
        animate={{ opacity: [0, 1] }}
        transition={{ ease: "easeOut", delay: 0.3 }}
      >
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? (
            <FiSun className="text-lg text-zinc-300 hover:text-white transition-colors" />
          ) : (
            <FiMoon className="text-lg text-zinc-600 hover:text-zinc-900 transition-colors" />
          )}
        </button>
        <div className="border-l border-zinc-200 dark:border-zinc-700 h-6"></div>
        <div className="flex items-center gap-4">
          <a 
            href={SocialLinks.Github} 
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="GitHub profile"
          >
            <AiFillGithub
              className="text-lg text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
            />
          </a>
          <a 
            href={SocialLinks.LinkedIn} 
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="LinkedIn profile"
          >
            <AiFillLinkedin 
              className="text-lg text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
            />
          </a>
        </div>
      </AnimatedDiv>
    </div>
  );
}
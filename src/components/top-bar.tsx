import { NAVIGATION_ITEMS, SocialLinks } from "../constants";
import { useState } from "react";
import { NavigationItem } from "../interfaces";
import { useTheme } from "../providers/theme-provider";
import { AiFillGithub, AiFillLinkedin, AiFillMoon, AiFillSun } from "react-icons/ai";
import { MdClose, MdMenu } from "react-icons/md";
import { Link } from "react-scroll";
import AnimatedDiv from "./animated-div";

export default function TopBar() {
  const {darkMode, toggleTheme} = useTheme();
  const [activeNavItem, setActiveNavItem] = useState<NavigationItem | null>(null);
  const [showPopupMenu, setShowPopupMenu] = useState(false);

  return (
    <div className="w-full max-w-[1200px] m-auto flex items-center z-10 justify-between py-4 px-4 mb-2 sticky top-0 bg-white dark:bg-zinc-900 rounded-lg shadow-sm">
      <div className="text-sm sm:flex hidden items-center gap-4">
        {NAVIGATION_ITEMS.map((navItem, index) => (
          <AnimatedDiv
            key={index} 
            animate = {{ opacity: [0, 1]}}
            transition={{ ease: 'easeInOut', delay: index * 0.1}}
          >
            <Link
              to={navItem.value} 
              spy={true} 
              smooth={true} 
              offset={-65} 
              duration={500} 
              className={`${activeNavItem?.value === navItem.value ? 'dark:text-white text-zinc-900' : 'text-zinc-500'} h-6 dark:hover:text-white hover:text-zinc-900 cursor-pointer`}
              onClick={() => setActiveNavItem(navItem)}
            >
              {navItem.label}
            </Link>
          </AnimatedDiv>
        ))}
      </div>
      <AnimatedDiv 
        className="sm:hidden block text-zinc-900 dark:text-white"
        animate = {{ opacity: [0, 1]}}
        transition={{ ease: 'easeInOut', delay: 0.2}}
      >
        <MdMenu onClick={() => setShowPopupMenu(true)}/>
      </AnimatedDiv>
      {showPopupMenu && (
        <div className="absolute top-0 left-0 py-4 bg-white dark:bg-zinc-900 shadow-sm rounded-lg w-full">
          <AnimatedDiv 
            className="flex justify-center py-4"
            animate = {{ opacity: [0, 1]}}
            transition={{ ease: 'easeInOut', delay: 0.2}}
          >
            <MdClose 
              onClick={() => setShowPopupMenu(false)}
              className="text-zinc-900 dark:text-white"
            />
          </AnimatedDiv>
          <div className="text-sm flex flex-col items-center gap-2">
            {NAVIGATION_ITEMS.map((navItem, index) => (
              <AnimatedDiv
                key={index} 
                animate = {{ opacity: [0, 1]}}
                transition={{ ease: 'easeInOut', delay: index * 0.1}}
              >
                <Link
                  to={navItem.value} 
                  spy={true} 
                  smooth={true} 
                  offset={-65} 
                  duration={500} 
                  className={`${activeNavItem?.value === navItem.value ? 'dark:text-white text-zinc-900' : 'text-zinc-400'} h-6 dark:hover:text-white hover:text-zinc-900 cursor-pointer`}
                  onClick={() => {
                    setActiveNavItem(navItem)
                    setShowPopupMenu(false)
                  }}
                >
                  {navItem.label}
                </Link>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      )}
      <AnimatedDiv 
        className="flex items-center gap-4"
        animate={{x: [20, 0], opacity: [0, 1]}}
        transition={{ease: 'easeInOut', delay: 0.7}}
      >
        <button onClick={() => toggleTheme()}>
          {darkMode ? (
            <AiFillSun className="text-md text-white"/>
          ) : (
            <AiFillMoon className="text-md text-zinc-900"/>
          )}
        </button>
        <a href={SocialLinks.Github} target="_blank">
          <AiFillGithub
            className="text-md text-zinc-900 dark:text-white"
          />
        </a>
        <a href={SocialLinks.LinkedIn} target="_blank">
          <AiFillLinkedin 
            className="text-md text-zinc-900 dark:text-white"
          />
        </a>
      </AnimatedDiv>
    </div>
  )
}

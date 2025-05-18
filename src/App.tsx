import { useEffect, useState } from "react";
import AboutMe from "./components/about-me";
import Contact from "./components/contact";
import Footer from "./components/footer";
import HeroSection from "./components/hero-section";
import Services from "./components/services";
import Skills from "./components/skills";
import TopBar from "./components/top-bar";
import { Events, scrollSpy, animateScroll as scroll } from 'react-scroll';
import { BiArrowToTop } from "react-icons/bi";
import Projects from "./components/projects";

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', to, element);
    });

    Events.scrollEvent.register('end', (to, element) => {
      console.log('end', to, element);
    });
    scrollSpy.update();

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-zinc-100 dark:bg-zinc-800">
      <div className='w-full max-w-[1200px] m-auto'>
        <TopBar />
        <div className="w-full p-4 sm:p-10 space-y-48 dark:bg-zinc-900 bg-white rounded-lg">
          <HeroSection />
          <Services />
          <Skills />
          <Projects />
          <AboutMe />
          <Contact />
          <Footer />
        </div>
        {showButton && (
          <div className="w-full sticky bottom-10 flex justify-end">
            <button
              className="w-[48px] h-[48px] rounded-full flex text-xl items-center justify-center  bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/50 transition-colors duration-300"
              onClick={() => scroll.scrollToTop()}
            >
              <BiArrowToTop />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default App

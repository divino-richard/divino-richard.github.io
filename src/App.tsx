import { useEffect } from "react";
import AboutMe from "./components/about-me";
import Contact from "./components/contact";
import Footer from "./components/footer";
import HeroSection from "./components/hero-section";
import Services from "./components/services";
import Skills from "./components/skills";
import TopBar from "./components/top-bar";
import { Events, scrollSpy, animateScroll as scroll } from 'react-scroll';
import { BiArrowToTop } from "react-icons/bi";

function App() {
  useEffect(() => {
    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', to, element);
    });

    Events.scrollEvent.register('end', (to, element) => {
      console.log('end', to, element);
    });
    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <div className='bg-zinc-100 dark:bg-zinc-800 w-full sm:p-6 p-2'>
      <TopBar />
      <div className="w-full lg:space-y-48 sm:space-y-36 space-y-10 max-w-[1200px] dark:bg-zinc-900 bg-white m-auto rounded-lg p-1">
        <HeroSection />
        <Services />
        <Skills />
        <AboutMe />
        <Contact />
        <Footer />
        <button
          className="fixed bottom-5 right-5 w-[40px] h-[40px] rounded-full flex items-center justify-center text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-800 text-xl shadow-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all border border-zinc-900 dark:border-white"
          onClick={() => scroll.scrollToTop()}
        >
          <BiArrowToTop />
        </button>
      </div>
    </div>
  )
}

export default App

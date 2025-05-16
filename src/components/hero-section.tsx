
import { FiPhone, FiMail } from 'react-icons/fi';
import ProfilePicture from '../assets/profile-picture.png';
import { Element, Link } from 'react-scroll';
import AnimatedDiv from './animated-div';

export default function HeroSection() {
  return (
    <Element 
      className="w-full min-h-[600px] bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-800 rounded-lg flex flex-col justify-center px-6 py-16 sm:py-24 relative overflow-hidden"
      name="home"
    >
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" 
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
      
      <div className="max-w-5xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Content Column */}
          <div className="md:col-span-8 space-y-8">
            <AnimatedDiv
              animate={{ opacity: [0, 1], y: [10, 0] }}
              transition={{ ease: 'easeOut', duration: 0.6 }}
              className="space-y-2"
            >
              <span className="inline-block px-4 py-1.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-sm font-medium rounded-full tracking-wide">
                Full Stack Developer
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white tracking-tight leading-tight">
                I'm Richard Divino
              </h1>
            </AnimatedDiv>
            
            <AnimatedDiv 
              animate={{ opacity: [0, 1], y: [10, 0] }}
              transition={{ ease: 'easeOut', duration: 0.6, delay: 0.2 }}
              className="text-zinc-700 dark:text-zinc-300 text-lg sm:text-xl md:pr-12 leading-relaxed"
            >
              Your partner in building tailored digital solutions that are both technically sound and creatively inspired, delivering exceptional user experiences across the modern web ecosystem.
            </AnimatedDiv>
            
            <AnimatedDiv
              animate={{ opacity: [0, 1], y: [10, 0] }}
              transition={{ ease: 'easeOut', duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Link
                to="contact" 
                spy={true} 
                smooth={true} 
                offset={-65} 
                duration={500}
                className="inline-block"
              >
                <button className="flex items-center gap-2.5 px-6 py-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-700 dark:hover:bg-zinc-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 dark:focus:ring-zinc-400">
                  <FiPhone className="text-lg" />
                  <span className="font-medium">Get in Touch</span>
                </button>
              </Link>
              
              <a 
                href="mailto:richard.divino@example.com" 
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-zinc-300 focus:ring-offset-2 dark:focus:ring-zinc-700"
              >
                <FiMail className="text-lg" />
                <span>Send Email</span>
              </a>
            </AnimatedDiv>
            
            <AnimatedDiv
              animate={{ opacity: [0, 1] }}
              transition={{ ease: 'easeOut', duration: 0.6, delay: 0.6 }}
              className="pt-6"
            >
              <div className="flex items-center gap-4">
                <div className="h-px bg-zinc-200 dark:bg-zinc-700 w-12"></div>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">Tech Stack</p>
              </div>
              <div className="flex flex-wrap gap-3 mt-4">
                {['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB'].map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-sm rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </AnimatedDiv>
          </div>
          
          {/* Image Column */}
          <div className="md:col-span-4 flex justify-center md:justify-end">
            <AnimatedDiv
              animate={{ opacity: [0, 1], scale: [0.9, 1] }}
              transition={{ ease: 'easeOut', duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-tr from-zinc-300 to-zinc-100 dark:from-zinc-700 dark:to-zinc-600 rounded-full blur opacity-70"></div>
              <div className="relative bg-white dark:bg-zinc-800 p-1.5 rounded-full shadow-xl">
                <img 
                  src={ProfilePicture} 
                  alt="Richard Divino profile picture"
                  className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] rounded-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-zinc-100 dark:bg-zinc-700 px-3 py-1.5 rounded-full shadow-md">
                <span className="font-medium text-sm text-zinc-600 dark:text-zinc-300">10+ Years Exp.</span>
              </div>
            </AnimatedDiv>
          </div>
        </div>
      </div>
    </Element>
  );
}
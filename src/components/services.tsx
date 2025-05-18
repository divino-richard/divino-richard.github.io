import { Element } from "react-scroll";
import { SERVICES } from "../constants";
import AnimatedDiv from "./animated-div";

export default function Services() {
  return (
    <Element 
      className=""
      name="services"
    >
      <AnimatedDiv 
        className="mb-12 text-center"
        animate={{ opacity: [0, 1] }}
        transition={{ ease: "easeOut", duration: 0.8 }}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
          Comprehensive Digital Solutions
        </h2>
        <p className="text-lg text-zinc-700 dark:text-zinc-300 max-w-3xl mx-auto">
          Delivering end-to-end expertise from front-end experiences to back-end architecture
        </p>
      </AnimatedDiv>
      
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {SERVICES.map((service, index) => (
          <AnimatedDiv 
            key={index} 
            className="bg-white dark:bg-zinc-800/50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 border border-zinc-100 dark:border-zinc-700/50"
            animate={{ y: [20, 0], opacity: [0, 1] }}
            transition={{ ease: "easeOut", duration: 0.6, delay: index * 0.1 }}
          >
            <div className="flex items-center justify-center h-12 w-12 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg mb-6">
              <service.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400"/>
            </div>
            
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
              {service.title}
            </h3>
            
            <ul className="space-y-3">
              {service.items.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-indigo-500 dark:text-indigo-400 mr-2">•</span>
                  <span className="text-zinc-700 dark:text-zinc-300">{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedDiv>
        ))}
      </div>
    </Element>
  );
}
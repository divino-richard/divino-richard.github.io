import { Element } from "react-scroll"
import { SERVICES } from "../constants"
import AnimatedDiv from "./animated-div"

export default function Services() {
  return (
    <Element 
      className="space-y-8 sm:px-8 px-2 flex flex-col justify-center"
      name="services"
    >
      <AnimatedDiv 
        className="space-y-2 "
        animate={{opacity: [0, 1]}}
        transition={{ease: 'linear', delay: 0.2}}
      >
        <h1 className="sm:text-2xl text-xl font-semibold sm:text-center text-left text-zinc-900 dark:text-white">
          Crafting Digital Solutions from Front to Back
        </h1>
      </AnimatedDiv>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:p-4 p-2 gap-y-4 sm:gap-x-4">
        {SERVICES.map((service, index) => (
          <AnimatedDiv 
            key={index} 
            className="space-y-2 "
            animate={{x: [-20, 0], opacity: [0, 1]}}
            transition={{ease: 'linear', delay: index * 0.2}}
          >
            <div className="flex items-center justify-center h-[35px] w-[35px] bg-zinc-100 dark:bg-zinc-800 rounded-lg">
              <service.icon className="text-zinc-900 dark:text-white"/>
            </div>
            <h1 className="text-md font-semibold text-zinc-900 dark:text-white">
              {service.title}
            </h1>
            <div className="pl-4 text-zinc-900 dark:text-white">
              <ul className="list-disc text-sm">
                {service.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </AnimatedDiv>
        ))}
      </div>
    </Element>
  )
}

import { Element } from "react-scroll";
import { PROJECTS } from "../constants";

export default function Projects() {
  return (
    <Element
      className="space-y-8 px-4 flex flex-col justify-center"
      name="projects"
    >
      <h1 className="sm:text-2xl text-xl font-semibold sm:text-center text-left text-zinc-900 dark:text-white">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:max-w-[800px] w-full m-auto">
        {PROJECTS.map((item, index) => (
          <div 
            key={index}
            className="border dark:border-zinc-800 p-4 rounded-md text-zinc-800 dark:text-white space-y-2"
          >
            <h1 className="text-md font-semibold text-zinc-900 dark:text-white">
              {item.name}
            </h1>
            <p className="text-sm">{item.description}</p>
            <div className="text-zinc-900 dark:text-white">
              <h3 className="font-semibold text-sm">Core Technologies</h3>
              <ul className="pl-4 list-disc text-sm">
                {item.tools.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Element>
  )
}

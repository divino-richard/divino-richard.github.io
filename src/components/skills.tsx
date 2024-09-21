import { Element } from "react-scroll";
import { TECHNOLOGIES } from "../constants";

export default function Skills() {
  return (
    <Element
      className="space-y-8 px-4 flex flex-col justify-center"
      name="skills"
    >
      <h1 className="sm:text-2xl text-xl font-semibold sm:text-center text-left text-zinc-900 dark:text-white">
        The Technology Behind My Creations
      </h1>
      <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 sm:max-w-[800px] w-full m-auto">
        {TECHNOLOGIES.map((item, index) => (
          <div 
            key={index}
            className="flex sm:flex-row flex-col gap-2 items-center border dark:border-zinc-800 p-4 rounded-md text-zinc-800 dark:text-white"
          >
            <div className="flex items-center justify-center w-[35px] h-[35px] rounded-md bg-zinc-100 dark:bg-zinc-800">
              <item.icon />
            </div>
            <div className="flex-1">
              <span className="text-sm">{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </Element>
  )
}

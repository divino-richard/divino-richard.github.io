import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { PiMapPinLight } from "react-icons/pi";
import { Element } from "react-scroll";

export default function Contact() {
  return (
    <Element 
      className="space-y-8 sm:px-0 px-4 flex flex-col justify-center"
      name="contact"
    >
      <h1 className="sm:text-2xl text-xl font-semibold sm:text-center text-left text-zinc-900 dark:text-white">
        Get in Touch & Let’s Make Magic Happen!
      </h1>
      <div className="w-full sm:max-w-[500px] m-auto grid grid-cols-1 gap-4 text-sm">
        <div className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 p-4 rounded-lg">
          <div className="flex items-center justify-center h-[35px] w-[35px] bg-zinc-100 dark:bg-zinc-800 rounded-lg">
            <AiOutlineMail className="text-zinc-900 dark:text-white"/>
          </div>
          <div className="text-zinc-900 dark:text-white">
            <span>richarddivino128@gmail.com</span>
          </div>
        </div>
        <div className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800  p-4 rounded-lg">
          <div className="flex items-center justify-center h-[35px] w-[35px] bg-zinc-100 dark:bg-zinc-800 rounded-lg">
            <AiOutlinePhone className="text-zinc-900 dark:text-white"/>
          </div>
          <div className="text-zinc-900 dark:text-white">
            <span>+63506866597</span>
          </div>
        </div>
        <div className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 p-4 rounded-lg space-y-1">
          <div className="flex items-center justify-center h-[35px] w-[35px] bg-zinc-100 dark:bg-zinc-800 rounded-lg">
            <PiMapPinLight className="text-zinc-900 dark:text-white"/>
          </div>
          <div className="text-zinc-900 dark:text-white">
            <span>Davao City, Philippines</span>
          </div>
        </div>
      </div>
    </Element>
  )
}

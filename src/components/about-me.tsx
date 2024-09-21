import { ABOUT_ME } from "../constants";
import ProfilePicture from '../assets/profile-picture.png';
import { Element } from "react-scroll";

export default function AboutMe() {
  return (
    <Element 
      className="space-y-8 px-4 flex flex-col justify-center"
      name="about-me"
    >
      <h1 className="sm:text-2xl text-xl font-semibold sm:text-center text-left text-zinc-900 dark:text-white">
        {ABOUT_ME.title}
      </h1>
      <div className="border border-zinc-200 dark:border-zinc-800 p-4 rounded-lg space-y-2 max-w-[800px] m-auto">
        <img 
          src={ProfilePicture} 
          className='w-[50px] h-[50px] sm:m-0 m-auto rounded-full border border-zinc-200 bg-zinc-100'
        />
        <div className="space-y-4 text-zinc-900 dark:text-white">
          {ABOUT_ME.paragraphs.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </Element>
  )
}

import { AiFillPhone } from 'react-icons/ai';
import ProfilePicture from '../assets/profile-picture.png';
import ActionButton from './action-button';
import { Element, Link } from 'react-scroll';
import AnimatedDiv from './animated-div';

export default function HeroSection() {
  return (
    <Element 
      className='w-full sm:h-[60vh] h-[50vh] min-h-[400px] bg-zinc-50 dark:bg-zinc-800 rounded-lg flex flex-col justify-center items-center space-y-6 p-4'
      name="home"
    >
      <AnimatedDiv
        transition={{ease: 'linear', delay: 0.2}}
        className='w-full max-w-[600px] flex items-center gap-2'
      >
        <img 
          src={ProfilePicture} 
          className='sm:w-[80px] w-[70px] sm:h-[80px] h-[70px] rounded-full border border-zinc-200 bg-zinc-100'
        />
        <div className='text-zinc-900 dark:text-white'>
          <span className='text-sm'>Hi,</span>
          <h1 className='font-semibold text-lg'>I'm Richard Divino</h1>
          <h1 className='text-md'>Full Stack Developer</h1>
        </div>
      </AnimatedDiv>
      <AnimatedDiv 
        className='max-w-[600px] text-zinc-900 dark:text-white'
        animate={{opacity: [0, 1]}}
        transition={{ease: 'linear', delay: 0.5}}
      >
        <h1 className='sm:text-3xl text-xl font-semibold'>
          Your partner in building tailored digital solutions that are both technically sound and creatively inspired.
        </h1>
      </AnimatedDiv>
       
      <AnimatedDiv
        animate={{y: [20, 0], opacity: [0, 1]}}
        transition={{ease: 'anticipate', delay: 0.7}}
        className='w-full max-w-[600px]'
      >
        <div className='w-fit'>
          <Link
            to={'contact'} 
            spy={true} 
            smooth={true} 
            offset={-65} 
            duration={500} 
          >
            <ActionButton>
              <AiFillPhone/>
              <span>Get in Touch</span>
            </ActionButton>
          </Link>
        </div>
      </AnimatedDiv>
    </Element>
  )
}

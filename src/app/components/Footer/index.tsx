'use client'
import React from 'react'
import Image from 'next/image'
import AnimatedButton from '../AnimatedButton'
import { style } from 'framer-motion/client'
import { LucideGithub, LucideLinkedin } from 'lucide-react'
import { useLenis } from 'lenis/react'

const Footer = () => {
  const lenis = useLenis()

  const scrollTo = (target: any) => {
    if (lenis) {
      lenis.scrollTo(target, { duration: 2, offset: -80 });
    }
  };

  return (
    <>
      <div id="footer" className='mt-10'>
        <div className=''>
          <div className={'relative py-[20vh] bg-cover bg-center w-full  bg-[url("/backgrounds/dark.png")]  flex flex-col justify-center items-center'} >
            <div className={'relative flex flex-col h-full w-full justify-center items-center gap-2 py-10 max-w-6xl z-2 text-center'}>
              <p className='text-2xl text-sm:text-3xl md:text-4xl lg:text-5xl font-semibold'>I will help unleash Your Wildest ideas</p>
              <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 mt-3 font-semibold'>Let's make it together!</p>
              <AnimatedButton text="Let's Connect" />
              <p className='sm:text-md md:text-xl lg:text-2xl mt-4 font-bold'>Available for any freelance projects & full-time roles. </p>
              <p className='text-xs sm:text-sm md:text-lg lg:text-xl text-white/70 mt-2 max-sm:w-80 w-120 text-center'>
                I help in crafting seamless user experiences that are scalable, high-performing and specifically tailored for your business needs.
              </p>
            </div>

            <div className="absolute inset-0 z-0 bg-linear-to-b from-transparent to-base-100 opacity-100"></div>
            <div className="absolute inset-0 z-0 bg-linear-to-b from-transparent to-base-100 opacity-100"></div>
            <div className="absolute inset-0 z-0 bg-linear-to-b from-base-100 to-transparent opacity-100"></div>
            <div className="absolute inset-0 z-0 bg-base-100 opacity-65"></div>
          </div >
        </div>
      </div>
      <div id="footer-bottom" className='z-10 -mt-15 bg-base-100'>
        <div className="px-5 md:px-[8vw] flex justify-between mb-10 max-sm:justify-center">
          <div className="flex flex-col gap-2 max-sm:items-center">
            <img src="/yh.svg" alt="Vercel Logo" className='size-6 lg:size-9 -ml-2 mb-2' />
            <p className='text-xs md:text-sm text-white/70 max-sm:text-center'>Hey there! I'm Youssef, a full-stack developer,<br />freelancer, and creative problem-solver.<br />Glad you stopped by my site!</p>
            <p className='text-xs md:text-sm text-white/70 '>© {new Date().getFullYear()} Youssef Hassan | Built with Next.js</p>
            <div className="flex gap-2 text-white/70 items-center">
              <a className='hover:text-white' href='https://github.com/Youssef25331'>
                <LucideGithub className='max-md:size-5' />
              </a>
              <a className='hover:text-white' href='https://www.linkedin.com/in/youssef-hassan-b023a526b/'>
                <LucideLinkedin className='max-md:size-5' />
              </a>
            </div>
          </div>

          <div className="flex items-center max-md:hidden">
            <div className='text-sm flex flex-col text-center items-center'>
              <h1 className=' text-white font-bold '>
                Navigate
              </h1>
              <ul className='text-white/70'>
                <li className='hover:text-white hover:cursor-pointer' onClick={() => scrollTo("#hero")}>Home</li>
                <li className='hover:text-white hover:cursor-pointer' onClick={() => scrollTo("#stack")}>My Stack</li>
                <li className='hover:text-white hover:cursor-pointer' onClick={() => scrollTo("#about")}>About</li>
                <li className='hover:text-white hover:cursor-pointer' onClick={() => scrollTo("#projects")}>Projects</li>
              </ul>
            </div>
          </div>
          <div className="items-center md:mt-10 flex max-md:text-sm max-sm:hidden">
            <h1 className='text-white/70'>
              Building elegant digital solutions <br />with a focus on user experience <br />and technical excellence.
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer 

import React from 'react'
import Image from 'next/image'
import AnimatedButton from '../AnimatedButton'
import { style } from 'framer-motion/client'
import { LucideGithub, LucideLinkedin } from 'lucide-react'

const Footer = ({ scrollTo }: { scrollTo: Function }) => {
  return (
    <>
      <div id="footer">
        <div>
          <div className={'relative py-40 bg-cover bg-center w-full  bg-[url("/backgrounds/dark.png")]  flex flex-col justify-center items-center'} >
            <div className={'relative flex flex-col h-full w-full justify-center items-center gap-2 py-10 max-w-6xl z-2 '}>
              <p className='text-5xl'>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
              <p className='text-5xl mb-3 mt-3'>Vivamus luctus posuere ante in cursus.</p>
              <AnimatedButton text="Let's Connect" />
              <p className='text-2xl mt-4 font-bold'>Available for any freelance projects & full-time roles. </p>
              <p className='text-xl text-white/70 mt-2 w-120 text-center'>My approach focuses on creating scalable, high-performing solutions tailored to both user needs and business objectives. By prioritizing performance, </p>
            </div>

            <div className="absolute inset-0 z-0 bg-linear-to-b from-transparent to-base-100 opacity-100"></div>
            <div className="absolute inset-0 z-0 bg-linear-to-b from-base-100 to-transparent opacity-100"></div>
            <div className="absolute inset-0 z-0 bg-base-100 opacity-65"></div>
          </div >
        </div>
      </div>
      <div id="footer-bottom" className='z-10 -mt-15 '>
        <div className="px-40 flex justify-between mb-10">
          <div className="flex flex-col gap-2">
            <img src="/yh.svg" alt="Vercel Logo" className='size-9 -ml-2 mb-2' />
            <p className='text-sm text-white/70 '>Hey there! I'm Youssef, a full-stack developer,<br />freelancer, and creative problem-solver.<br />Glad you stopped by my site!</p>
            <p className='text-sm text-white/70 '>© {new Date().getFullYear()} Youssef Hassan | Built with Next.js</p>
            <div className="flex gap-2 text-white/70">
              <a className='hover:text-white' href='https://github.com/Youssef25331'>
                <LucideGithub />
              </a>
              <a className='hover:text-white' href='https://www.linkedin.com/in/youssef-hassan-b023a526b/'>
                <LucideLinkedin />
              </a>
            </div>
          </div>

          <div className='flex flex-col text-center align-center'>
            <h1 className='text-sm text-white font-bold '>
              Navigate
            </h1>
            <ul className='text-white/70'>
              <li className='hover:text-white hover:cursor-pointer' onClick={() => scrollTo("#hero")}>Home</li>
              <li className='hover:text-white hover:cursor-pointer' onClick={() => scrollTo("#stack")}>My Stack</li>
              <li className='hover:text-white hover:cursor-pointer' onClick={() => scrollTo("#about")}>About</li>
              <li className='hover:text-white hover:cursor-pointer' onClick={() => scrollTo("#projects")}>Projects</li>
            </ul>
          </div>
          <div className="">
            <h1 className='text-sm text-white/70'>
              Building elegant digital solutions <br />with a focus on user experience and technical excellence.
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer 

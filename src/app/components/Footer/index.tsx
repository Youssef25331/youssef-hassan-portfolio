import React from 'react'
import Image from 'next/image'
import AnimatedButton from '../AnimatedButton'
import { style } from 'framer-motion/client'
import { LucideGithub, LucideLinkedin } from 'lucide-react'

const Footer = () => {
  return (
    <>
      <div id="footer-top">
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
            <p className='text-sm text-white/70 '>I'm Youssef - a full-stack developer,<br />freelancer & problem solver.<br />Thanks for checking out my site!</p>
            <p className='text-sm text-white/70 '>© {new Date().getFullYear()} Youssef Hassan | Built with Next.js</p>
            <div className="flex gap-2 text-white/70">
              <LucideGithub />
              <LucideLinkedin />
            </div>
          </div>

          <div className='flex flex-col text-center'>
            <h1 className='text-sm text-white font-bold'>
              Transition
            </h1>
            <ul className='text-white/70'>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
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

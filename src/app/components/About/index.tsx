import { LucideGithub, LucideLinkedin } from 'lucide-react'
import React from 'react'

const About = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className="flex flex-col justify-center items-center w-220 gap-1">
        <h2 className='text-2xl text-white/70'>About me</h2>
        <h1 className='text-5xl text-shadow-main text-center'>A Full-Stack web developer dedicated to turning ideas into creative solutions</h1>
        <div className="flex flex-col justify-center items-center gap-8 mt-5">
          <p className=' text-2xl text-center text-white/70 w-180 leading-12'>
            My approach focuses on creating scalable, high-performing solutions tailored to both user needs and business objectives. By prioritizing performance, accessibility, and responsiveness, I strive to deliver experiences that not only engage users but also drive tangible results.
            <br />
            <br />
            I believe in a user centered design approach, ensuring that every project I work on is tailored to meet the specific needs of its users.
          </p>
          <div className="flex gap-3 text-white/70">
            <a className='hover:text-white' href='https://github.com/Youssef25331'>
              <LucideGithub />
            </a>
            <a className='hover:text-white' href='https://www.linkedin.com/in/youssef-hassan-b023a526b/'>
              <LucideLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

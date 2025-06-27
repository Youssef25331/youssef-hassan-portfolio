import React from 'react'
import Image from 'next/image'
import AnimatedButton from '../AnimatedButton'
import { style } from 'framer-motion/client'

const Footer = () => {
  return (
    <div className={'relative bg-cover bg-center h-180 w-full] z-1 inset-shadow-[0_0px_8000px_rgba(60,60,60,1)] '}
      style={{ backgroundImage: "linear-gradient(rgba(135, 80, 156, 1), url(/backgrounds/dark.png)" }}>
      <div className={'flex flex-col justify-center items-center h-full w-full gap-2'}>
        <p className='text-4xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        <p className='text-4xl'>Vivamus luctus posuere ante in cursus.</p>
        <AnimatedButton text="Let's Connect" />
        <p className='text-2xl'>Available for any freelance projects & full-time roles. </p>
        <p className='text-md text-white/70'>My approach focuses on creating scalable, high-performing solutions tailored to both user needs and business objectives. By prioritizing performance, </p>
      </div>
    </div >
  )
}

export default Footer 

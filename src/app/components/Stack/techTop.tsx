"use client"
import React from 'react'
import Spinner from '../Spinner'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
// gsap.registerPlugin(ScrollTrigger)

// gsap.set(".stack-flower", { opacity: 0, y: 50 });

// gsap.to('.stack-flower', {
//   scrollTrigger: {
//     trigger: ".stack-flower",
//     toggleActions: "play none none reverse",
//     markers: true
//   },
//   y: 0,
//   opacity: 1,
//   rotation: 0,
//   duration: 1.3,
// })

const TechTop = () => {
  return (
    <div className="flex justify-center stack-flower">
      <div className='flex text-shadow-main text-sm md:text-lg lg:text-2xl justify-start lg:justify-center basis-full'>
        <div className="flex w-66 gap-2 items-center">
          <Spinner />
          <h1>MY STACK</h1>
        </div>
      </div>
      <div className='max-lg:basis-full w-330' />
    </div>
  )
}

export default TechTop

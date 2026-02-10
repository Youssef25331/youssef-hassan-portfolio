"use client"
import React from 'react'
import Spinner from '../Spinner'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger)


const TechTop = () => {
  useGSAP(
    () => {
      gsap.set(".stack-indicator", { opacity: 0, y: 20 });

      gsap.to('.stack-indicator', {
        scrollTrigger: {
          trigger: ".stack-indicator",
          toggleActions: "play none none reverse",
        },
        y: 0,
        opacity: 1,
        duration: 0.3,
      })
    }
  )
  return (
    <div className="flex justify-center stack-indicator">
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

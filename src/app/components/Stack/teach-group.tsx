"use client"

import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, useScroll, useMotionValue } from 'framer-motion'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)



interface TechItemProps {
  item: TechItem
  index: number
}

interface TechItem {
  name: string
  icon?: string
}

interface StackGroup {
  groupName: string
  items: TechItem[]
}

const TechItem = ({ item, index }: TechItemProps) => {

  const ref = useRef<HTMLHeadingElement>(null)
  useGSAP(() => {

    gsap.set(".stack-item", { opacity: 0, y: 60 });
    gsap.to('.stack-item', {
      scrollTrigger: {
        trigger: '.stack-item',
        toggleActions: "play none none reverse",
      },
      y: 0,
      opacity: 1,
      duration: 0.3,
    })
  }, { scope: ref })

  return (
    <div
      ref={ref}    >

      <div
        className="flex gap-2 items-center stack-item"
      >
        <div className="flex relative h-6 w-6 lg:w-9 lg:h-9 ">
          <Image layout="fill" objectFit="contain" src={item.icon || "/tech/react.png"} alt={item.name} />
        </div>
        <div className="md:text-xl lg:text-3xl text-white/70">{item.name}</div>
      </div>

    </div>
  )
}

const TechGroup = ({ group }: { group: StackGroup }) => {
  const groupRef = useRef<HTMLHeadingElement>(null)
  const h1Opacity = useMotionValue(0)
  const h1InitialY = 20
  const h1Y = useMotionValue(h1InitialY)
  const { scrollY } = useScroll()

  useEffect(() => {
    const updateH1Animation = () => {
      if (groupRef.current) {
        const elementTop = groupRef.current.offsetTop
        const viewportHeight = window.innerHeight
        const viewportBottom = scrollY.get() + viewportHeight
        const triggerDistance = viewportHeight / 2
        const progress = (viewportBottom - elementTop) / triggerDistance
        const clampedProgress = Math.min(Math.max(progress, 0), 1)
        h1Opacity.set(clampedProgress)
        h1Y.set(h1InitialY * (1 - clampedProgress))
      }
    }

    updateH1Animation() // Set initial values
    const unsubscribe = scrollY.onChange(updateH1Animation)
    return () => unsubscribe()
  }, [scrollY, h1Opacity, h1Y])


  useGSAP(() => {

    gsap.set(".stack-header", { opacity: 0, y: 30 });
    gsap.to('.stack-header', {
      scrollTrigger: {
        trigger: '.stack-header',
        toggleActions: "play none none reverse",
      },
      y: 0,
      opacity: 1,
      duration: 0.3,
    })
  }, { scope: groupRef })

  return (
    <div className="flex mb-10 min-sm:min-w-125"
      ref={groupRef}
    >
      <div
        className="text-4xl md:text-6xl font-bold text-shadow-main basis-full flex justify-start lg:justify-center stack-header">
        <div className="flex w-[55vw]  lg:w-66">
          {group.groupName}
        </div>
      </div>
      {/* </motion.h1> */}
      <div className="flex flex-wrap gap-x-3 gap-y-2 max-lg:w-150 w-330">
        {group.items.map((item, index) => (
          <React.Fragment key={item.name}>
            {index % 3 === 0 && <div className="basis-full max-sm:hidden"></div>}
            <TechItem item={item} index={index} />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default TechGroup

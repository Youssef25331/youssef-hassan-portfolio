"use client"
// Works well for now but should concider moving to gsap for better animations

import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, useScroll, useMotionValue } from 'framer-motion'

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
  const ref = useRef<HTMLDivElement>(null)
  const opacity = useMotionValue(0)
  const initialY = 20 + (index % 3 * 20)
  const y = useMotionValue(initialY)
  const { scrollY } = useScroll()

  useEffect(() => {
    const updateAnimation = () => {
      if (ref.current) {
        const elementTop = ref.current.offsetTop
        const viewportHeight = window.innerHeight
        const viewportBottom = scrollY.get() + viewportHeight
        const triggerDistance = viewportHeight / 5
        const progress = (viewportBottom - elementTop) / triggerDistance
        const clampedProgress = Math.min(Math.max(progress, 0), 1)
        opacity.set(clampedProgress)
        y.set(initialY * (1 - clampedProgress))
      }
    }

    updateAnimation() // Set initial values
    const unsubscribe = scrollY.onChange(updateAnimation)
    return () => unsubscribe()
  }, [scrollY, opacity, y, initialY])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: initialY }}
      style={{ opacity, y }}
      className="flex gap-2 items-center"
      key={item.name}
    >
      <div className="flex relative h-6 w-6 lg:w-9 lg:h-9 ">
        <Image layout="fill" objectFit="contain" src={item.icon || "/tech/react.png"} alt={item.name} />
      </div>
      <div className="md:text-xl lg:text-3xl text-white/70">{item.name}</div>
    </motion.div>
  )
}

const TechGroup = ({ group }: { group: StackGroup }) => {
  const h1Ref = useRef<HTMLHeadingElement>(null)
  const h1Opacity = useMotionValue(0)
  const h1InitialY = 20
  const h1Y = useMotionValue(h1InitialY)
  const { scrollY } = useScroll()

  useEffect(() => {
    const updateH1Animation = () => {
      if (h1Ref.current) {
        const elementTop = h1Ref.current.offsetTop
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

  return (
    <div className="flex mb-10 min-w-125">
      <motion.h1
        ref={h1Ref}
        initial={{ opacity: 0, y: h1InitialY }}
        style={{ opacity: h1Opacity, y: h1Y }}
        className="text-4xl md:text-6xl font-bold text-shadow-main basis-full flex justify-start lg:justify-center ">
        <div className="flex md:w-[55vw] lg:w-66">
          {group.groupName}
        </div>
      </motion.h1>
      <div className="flex flex-wrap max-lg:basis-full gap-x-3 gap-y-2 w-330">
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

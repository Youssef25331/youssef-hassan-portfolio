"use client"
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { NavBarLoader } from './Navbar'

const SmoothScroller: React.FC<{ children: React.ReactNode }> = ({ children, }) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState(0)
  const [windowHeight, setWidnowHeight] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current != null) {
        setContentHeight(contentRef.current.scrollHeight)
      }
      setWidnowHeight(window.innerHeight)
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [contentRef])

  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
    resDelta: 0.001
  })

  const y = useTransform(smoothProgress, (value) => {
    return value * -(contentHeight - windowHeight)
  })

  return (
    <>
      <div style={{ height: contentHeight }}></div>
      <motion.div ref={contentRef}
        style={{ y: y }}
        className='top-0 fixed w-screen flex flex-row'>
        {children}
      </motion.div >
    </>
  )
}

export default SmoothScroller

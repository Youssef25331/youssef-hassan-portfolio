"use client"
import { ArrowRight } from 'lucide-react';
import { motion, useAnimationControls } from 'framer-motion';

function AnimatedButton({ text }: { text?: string }) {
  const controls = useAnimationControls()

  const variants = {
    initial: { width: 36, height: 36, x: 0, },
    fill: { width: "130%", height: '130%', x: 10}
  }

  return (
    <motion.button
      onHoverStart={() => controls.start('fill')}
      onHoverEnd={() => controls.start('initial')}
      className='btn rounded-4xl text-shadow-none shadow-none font-thin  hover:text-black bg-white/10 overflow-hidden h-fit p-0 py-1.5 absolute'>
      <motion.span animate={controls} className='ml-6 mr-6 font-medium text-[16px]'>
        {!text ? "Animated Button" : text}
      </motion.span>
      <motion.div
        animate={controls}
        variants={variants}
        transition={{ duration: 0.3, ease: "circOut" }}
        className='-z-1 right-1 w-9 h-9 bg-white/80 absolute rounded-4xl p-1'>
      </motion.div>
      <div
        className='-z-1 w-9 h-9 bg-none rounded-4xl p-1'>
      </div>
      <ArrowRight className='text-black size-4 absolute right-3.5' />
    </motion.button >
  )
}

export default AnimatedButton

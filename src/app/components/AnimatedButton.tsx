"use client"
import { ArrowRight, LucideGithub, LucideLinkedin } from 'lucide-react';
import { motion, useAnimationControls } from 'framer-motion';
import { SmoothCursor } from './Cursor';

function AnimatedButton({ text }: { text?: string }) {
  const controls = useAnimationControls()

  const variants = {
    initial: { width: 36, height: 36, x: 0, },
    fill: { width: "130%", height: '130%', x: 10 }
  }

  return (
    <>
      <motion.button
        onHoverStart={() => controls.start('fill')}
        onHoverEnd={() => controls.start('initial')}
        onClick={() => document.getElementById('my_modal_5').showModal()}
        className='btn rounded-4xl text-shadow-none shadow-none font-thin  hover:text-black bg-white/10 overflow-hidden h-fit p-0 py-1.5 relative z-100'>
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
      <dialog id="my_modal_5" className="modal backdrop-blur-[4px] modal-bottom flex justify-center">
        <SmoothCursor />
        <div className="modal-box w-100">
          <div className="flex gap-3 text-white/70">
            <a className='hover:text-white ' href='https://github.com/Youssef25331'>
              <LucideGithub className='size-5'/>
            </a>
            <a className='hover:text-white' href='https://www.linkedin.com/in/youssef-hassan-b023a526b/'>
              <LucideLinkedin className='size-5' />
            </a>
          </div>
          <h3 className="font-bold text-lg">Fill a form</h3>
          <h3 className="font-bold text-lg">Fill a form</h3>
          <p className="py-4">Press ESC key or click the button below to close</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default AnimatedButton

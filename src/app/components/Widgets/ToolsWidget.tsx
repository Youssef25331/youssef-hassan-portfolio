import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { animate, motion, useMotionValue } from 'framer-motion'
import useMeasure from 'react-use-measure'

interface ToolItem {
  name: string,
  icon: string

}
const ToolsWidget = ({ group, delay }: { group: ToolItem[], delay: number }) => {

  let [ref, { width }] = useMeasure();
  let [hovered, setHovered] = useState(false)

  return (
    <main className='flex h-full items-center' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <motion.div className="transform-gpu flex" ref={ref} initial={{ x: 0 }} animate={{ x: "-100%", }}
        transition={{
          ease: 'linear',
          duration: delay,
          repeat: Infinity,
        }}
      >
        {[...group].map((item, index) => (
          <motion.div className={`flex justify-center items-center border-2  ${hovered ? "border-cyan-800" : "border-base-300"} duration-500 rounded-3xl size-28 mr-4 `}
            key={index} animate={{ y: hovered ? -10 : 0 }} transition={{ ease: 'backInOut', type: 'keyframes', duration: 0.5 }}>
            <div className="size-23 rounded-2xl flex justify-center items-center bg-base-300">
              <div className="relative size-12">
                <Image layout="fill" objectFit="contain" src={item.icon} alt={item.name} />
              </div>
            </div>
          </motion.div>
        ))
        }
      </motion.div >
      <motion.div className="transform-gpu flex " ref={ref} initial={{ x: 0 }} animate={{ x: "-100%" }}
        transition={{
          ease: 'linear',
          duration: delay,
          repeat: Infinity,
        }}
      >
        {[...group].map((item, index) => (
          <motion.div className={`flex justify-center items-center border-2 ${hovered ? " border-cyan-800" : "border-base-300"} duration-500  rounded-3xl size-28 mr-4`}
            key={index} animate={{ y: hovered ? -10 : 0 }} transition={{ ease: 'backInOut', type: 'keyframes', duration: 0.5 }}>
            <div className="size-23 rounded-2xl flex justify-center items-center bg-base-300">
              <div className="relative size-12">
                <Image layout="fill" objectFit="contain" src={item.icon} alt={item.name} />
              </div>
            </div>
          </motion.div>
        ))
        }
      </motion.div >
    </main >
  )
}

export default ToolsWidget


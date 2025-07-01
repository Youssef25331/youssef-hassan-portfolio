import React, { useEffect } from 'react'
import Image from 'next/image'
import { animate, motion, useMotionValue } from 'framer-motion'
import useMeasure from 'react-use-measure'

const group1 = [1, 2, 3, 4, 5]
const ToolsWidget = ({ group = group1 }: { group?: number[] }) => {

  let [ref, { width }] = useMeasure();


  return (
    <main className='flex '>
      <motion.div className="transform-gpu flex " ref={ref} initial={{ x: 0 }} animate={{ x: "-100%" }}
        transition={{
          ease: 'linear',
          duration: 10,
          repeat: Infinity,
        }}
      >
        {[...group].map((item, index) => (
          <motion.div className="flex justify-center items-center border-2 border-base-300  rounded-3xl size-28"
            key={index}  >
            <div className="size-23 rounded-2xl flex justify-center items-center bg-base-300">
              <div className="relative size-15">
                <Image layout="fill" objectFit="contain" src={"/tech/react.png"} alt={"who knows"} />
              </div>
            </div>
          </motion.div>
        ))
        }
      </motion.div >
      <motion.div className="transform-gpu flex " ref={ref} initial={{ x: 0 }} animate={{ x: "-100%" }}
        transition={{
          ease: 'linear',
          duration: 10,
          repeat: Infinity,
        }}
      >
        {[...group].map((item, index) => (
          <motion.div className="flex justify-center items-center border-2 border-base-300  rounded-3xl size-28"
            key={index}  >
            <div className="size-23 rounded-2xl flex justify-center items-center bg-base-300">
              <div className="relative size-15">
                <Image layout="fill" objectFit="contain" src={"/tech/react.png"} alt={"who knows"} />
              </div>
            </div>
          </motion.div>
        ))
        }
      </motion.div >
    </main>
  )
}

export default ToolsWidget


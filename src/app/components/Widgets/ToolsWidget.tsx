import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const group1 = [1, 2, 3, 4, 5]

const ToolsWidget = ({ group = group1 }: { group: number[] }) => {
  return (

    <motion.div className="flex justify-center items-center h-full gap-2 w-[100vw]" >
      {group.map((item, index) => (
        <motion.div className="flex justify-center items-center border-2 border-base-300  rounded-3xl size-28" initial={{ x: 300 }} animate={{ x: 0 }} transition={{ ease: 'linear', duration: 8, repeat: Infinity }}>
          <div className="size-23 rounded-2xl flex justify-center items-center bg-base-300">
            <div className="relative size-15">
              <Image layout="fill" objectFit="contain" src={"/tech/react.png"} alt={"who knows"} />
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default ToolsWidget

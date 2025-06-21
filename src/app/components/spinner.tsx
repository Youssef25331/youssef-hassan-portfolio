"use client"

import React from 'react'
import { LucideSlack, Slack } from 'lucide-react'
import { motion } from 'framer-motion'


function Spinner() {
  return (
    <motion.div animate={{ rotate: [0, 360] }} transition={{ repeat: Infinity, duration: 3, ease: "linear" }} className="w-fit h-fit">
      <Slack className='size-6 shadow-base-100' />
    </motion.div>
  )
}

export default Spinner

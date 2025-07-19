"use client"
import React, { useEffect, useState } from 'react'
import { LucideCheck, LucideCheckCircle, LucideCopy } from 'lucide-react'
import { motion } from 'framer-motion'

function ClipboardButton() {
  const [copied, setCopied] = useState(false)
  useEffect(() => {
    setTimeout(() => setCopied(false), 5000)
  }, [copied])

  return (
    <motion.div onClick={() => {
      setCopied(true)
      navigator.clipboard.writeText("yousseft25331@gmail.com")
    }} className='flex  text-sm md:text-base items-center gap-2 inset-shadow-[0_0px_20px_rgba(30,30,30,1)] transition duration-200 cursor-pointer rounded-lg px-4 py-3'>
      {!copied ? <LucideCopy className='size-3 sm:size-4' /> : <LucideCheck />}
      {!copied ? "yousseft25331@gmail.com" : "Hope to hear from you soon"}
      <div className="max-sm:left-0 fixed bottom-15 flex max-sm:justify-center w-full left-15 z-100">
        <motion.div initial={{ y: 140, opacity: 0 }} animate={{ y: copied ? 0 : 140, opacity: copied ? 1 : 0 }} transition={{ duration: 0.8, ease: "backInOut" }}
          className="relative border border-base-200 w-70 h-13 bg-[#131313] rounded-md flex p-2">
          <div className=" flex justify-start items-center gap-3">
            <LucideCheckCircle className='size-4' />
            <div>
              <p className='font-thin text-sm'>
                Copied to clipboard!
              </p>
              <p className='font-bold text-sm'>
                The email was  copied successfully
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ClipboardButton



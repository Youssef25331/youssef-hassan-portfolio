"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"

interface NavItem {
  name: string
  url: string
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)

  return (

    <div className="flex">
      <div className="fixed top-0 mt-7 ml-38 z-10">
        <img src="/yh.svg" alt="Logo" className='size-8' />
      </div>
      <div
        className={`fixed top-0 left-1/2 -translate-x-1/2 z-200 mb-6 pt-6 ${className}`
        }
      >

        <div className="flex items-center gap-2 bg-background/5 border border-border border-base-200 backdrop-blur-lg py-1 px-1.5 rounded-full shadow-lg">

          {items.map((item) => {
            const isActive = activeTab === item.name
            return (
              <Link
                key={item.name}
                onClick={() => setActiveTab(item.name)}
                href={item.url}
                className={`relative cursor-pointer text-xs px-5 py-2 rounded-full transition-colors hover:text-base-content ${isActive ? "bg-muted text-base-content" : "text-primary-content"}`}
              >
                <span className="hidden md:inline">{item.name}</span>
                <span className="md:hidden">
                </span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-base-content/5 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-base-content rounded-t-full">
                      <div className="absolute w-12 h-6 bg-base-content/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-base-content/20 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-base-content/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

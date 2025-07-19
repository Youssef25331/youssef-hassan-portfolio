"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface NavItem {
  name: string
  url: string
}

interface NavBarProps {
  items: NavItem[]
  className?: string
  scrollTo: Function
}

export function NavBar({ items, className, scrollTo }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)

  // Set up Intersection Observer when the component mounts
  useEffect(() => {
    // Extract section IDs from the items array (remove the '#' from url)
    const sectionIds = items.map(item => item.url.substring(1))
    const sections = sectionIds.map(id => document.getElementById(id))

    // Create the Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Get the ID of the section that’s currently intersecting
            const id = entry.target.id
            // Find the corresponding nav item
            const correspondingItem = items.find(item => item.url === `#${id}`)
            if (correspondingItem) {
              setActiveTab(correspondingItem.name)
            }
          }
        })
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: "0px 0px -100% 0px", // Trigger when the section hits the top of the viewport
        threshold: 0 // Trigger as soon as any part of the section crosses the top
      }
    )

    // Start observing each section
    sections.forEach(section => {
      if (section) {
        observer.observe(section)
      }
    })

    // Clean up the observer when the component unmounts
    return () => {
      sections.forEach(section => {
        if (section) {
          observer.unobserve(section)
        }
      })
    }
  }, [items]) // Re-run if items change

  return (
    <div className="flex">
      <div className="fixed top-0 mt-7 ml-[10vw] max-md:ml-10">
        <img src="/yh.svg" alt="Logo" className='size-5 md:size-7' />
      </div>
      <div
        className={`fixed top-0 left-1/2 -translate-x-1/2 mb-6 pt-6 ${className}`}
      >
        <div className="flex items-center gap-2 bg-background/5 border border-border border-base-200 backdrop-blur-lg py-1 px-1.5 rounded-full shadow-lg max-md:hidden ">
          {items.map((item) => {
            const isActive = activeTab === item.name
            return (
              <div
                key={item.name}
                onClick={() => {
                  setActiveTab(item.name)
                  scrollTo(item.url)
                }}
                className={`relative cursor-pointer text-xs px-5 py-2 rounded-full transition-colors hover:text-base-content ${isActive ? "bg-muted text-base-content" : "text-primary-content"} `}
              >
                <span className="">{item.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-base-content/5 rounded-full -z-10"
                    initial={true}
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
              </div>
            )
          })}

          <div

            onClick={() => document.getElementById('my_modal_5').showModal()}
            className={`items-center justify-center gap-2 relative inline-block h-full cursor-pointer rounded-full px-4 py-2 font-medium text-xs  transition-all duration-300 bg-base-200/40 text-white/70 hover:bg-base-200/60 hover:text-white`}
          >
            <span className="">Contact</span>
            <div
              className="absolute bottom-1 h-1/3 w-full -translate-x-4 rounded-full opacity-20 blur-sm bg-white">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

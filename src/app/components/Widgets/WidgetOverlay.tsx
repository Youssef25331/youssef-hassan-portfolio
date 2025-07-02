'use client'
import { LucideArrowRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const WidgetOverlay: React.FC<{ children: React.ReactNode, title: string, text: string, buttonText: string, icon: React.ComponentType<{ className?: string }> }> = ({ children, title, text, buttonText, icon: IconComponent },) => {
  const [hovered, setHovered] = useState(false)
  const iconClasses: string = "size-12 origin-left text-neutral-700 transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75"

  useEffect(() => { console.log(hovered) }, [hovered])
  return (
    <div
      className="relative size-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      {children}

      <div className="pointer-events-none z-10 flex flex-col gap-1 p-6 transform-gpu transition-all duration-300 group-hover:-translate-y-10 absolute bottom-0">
        <IconComponent className={iconClasses} />
        <h1 className='max-w-lg text-neutral-400'>{title}</h1>
        <p className='text-xl font-semibold text-neutral-300'>{text}</p>
      </div>
      <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <a href="" className="inline-flex cursor-pointer items-center justify-center text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50  outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:ring-destructive/40  hover:text-accent-foreground hover:bg-accent/50 h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 pointer-events-auto">
          {buttonText}
          <LucideArrowRight className='size-4' />
        </a>
      </div>
      <div className={`absolute inset-0 opacity-100 transition duration-200 pointer-events-none z-1 ${hovered ? 'inset-shadow-[0_-10px_100px_rgba(30,30,30,1)]' : 'inset-shadow-[0_0px_50px_rgba(30,30,30,0.5)]'} `}>
      </div>
    </div>
  );
}

export default WidgetOverlay

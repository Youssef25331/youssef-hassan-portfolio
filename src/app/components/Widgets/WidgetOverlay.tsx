'use client'
import React, { useEffect, useState } from 'react'

const WidgetOverlay: React.FC<{ children: React.ReactNode }> = ({ children, }) => {
  const [hovered, setHovered] = useState(false)

  useEffect(() => { console.log(hovered) }, [hovered])
  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      {children}
      <div className={`absolute inset-0  opacity-100 transition duration-200 pointer-events-none z-10 ${hovered ? 'inset-shadow-[0_0px_100px_rgba(30,30,30,1)]' : 'inset-shadow-[0_0px_50px_rgba(30,30,30,0.5)]'} `} />
    </div>
  );
}

export default WidgetOverlay

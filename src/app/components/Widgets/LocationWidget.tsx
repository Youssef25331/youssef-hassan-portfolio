import React from 'react'
import { Globe } from './globe'

const LocationWidget = () => {
  return (
    <div className=" flex-col flex w-full h-full">
      <div className="flex flex-col items-center relative max-sm:top-15 max-md:top-10 top-20 w-full font-bold text-shadow-main lg:top-15 lg:text-2xl sm:text-xl gap-2">
        <h1>Flexiable with any time-zone</h1>
        <h1 className='lg:text-2xl sm:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-[var(--color-primary)]'>Connect at any time</h1>
        <Globe />
      </div>
    </div>
  )
}

export default LocationWidget

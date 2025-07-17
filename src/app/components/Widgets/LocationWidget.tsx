import React from 'react'
import { Globe } from './globe'

const LocationWidget = () => {
  return (
    <div className=" flex-col flex w-full">
      <div className="flex flex-col items-center relative top-0 w-full font-bold text-shadow-main text-2xl gap-2">
        <h1>Flexiable with any time-zone</h1>
        <h1 className='text-1xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white'>Connect at any time</h1>
      </div>
      <Globe />
    </div>
  )
}

export default LocationWidget

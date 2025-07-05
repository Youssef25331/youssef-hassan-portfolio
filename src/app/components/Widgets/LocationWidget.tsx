import React from 'react'
import { Globe } from './globe'

const LocationWidget = () => {
  return (
    <div className=" flex-col flex w-full">
      <div className="flex flex-col items-center relative top-18 w-full font-bold text-shadow-main text-2xl gap-2">
        <h1>Flexiable with any time-zone</h1>
        <h1 className='text-1xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white'>Connect at any time</h1>
      </div>
      <div className="flex relative top-22 justify-center w-full font-thin gap-2">
        <button className='btn border-none btn-soft leading-0 px-7 text-xs h-8 rounded-1xl text-primary-content'>USA</button>
        <button className='btn border-none btn-soft leading-0 px-7 text-xs h-8 rounded-1xl text-[color-mix(in_oklab,var(--color-primary)_100%,#ffffff_80%)] bg-primary text-shadow-none'>Egypt</button>
        <button className='btn border-none btn-soft leading-0 px-7 text-xs h-8 rounded-1xl text-primary-content'>Japan</button>
      </div>
      <Globe />
    </div>
  )
}

export default LocationWidget

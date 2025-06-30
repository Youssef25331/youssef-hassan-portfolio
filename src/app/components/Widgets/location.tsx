import React from 'react'
import { Globe } from './globe'

const location = () => {
  return (
    <div className=" flex-col flex w-full">
      <div className="flex relative top-16 justify-center w-full font-bold text-shadow-main text-2xl gap-2">
        <h1>Flexiable with any time-zone</h1>
      </div>
      <div className="flex relative top-22 justify-center w-full font-thin gap-2">
        <button className='btn border-none btn-soft leading-0 px-7 text-xs h-8 rounded-1xl text-primary-content'>USA</button>
        <button className='btn border-none btn-soft leading-0 px-7 text-xs h-8 rounded-1xl text-cyan-200 bg-cyan-900 text-shadow-none'>Egypt</button>
        <button className='btn border-none btn-soft leading-0 px-7 text-xs h-8 rounded-1xl text-primary-content'>Japan</button>
      </div>
      <Globe className="-z-1" />
    </div>
  )
}

export default location

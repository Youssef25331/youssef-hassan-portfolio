import React from 'react'
import { Globe } from './globe'
import ClipboardButton from './ClipboardButton'

const Widgets = () => {
  return (
    <main className='flex gap-4 justify-center'>
      <div className='flex flex-col gap-4'>
        <div className="flex inset-shadow-[0_0px_70px_rgba(30,30,30,1)] hover:inset-shadow-[0_0px_100px_rgba(30,30,30,1)] transition duration-200 cursor-grab  justify-start border rounded-3xl border-base-200 w-200 overflow-hidden h-73">
          <h1>HI</h1>
        </div>
        <div className='flex flex-row gap-4'>
          <div className='inset-shadow-[0_0px_70px_rgba(30,30,30,1)] hover:inset-shadow-[0_0px_100px_rgba(30,30,30,1)] transition duration-200 cursor-grab  justify-start border rounded-3xl border-base-200 w-98 overflow-hidden h-73'>
            <h1>HI</h1>
          </div>
          <div className='flex flex-col gap-4 justify-center items-center inset-shadow-[0_0px_70px_rgba(30,30,30,1)] hover:inset-shadow-[0_0px_100px_rgba(30,30,30,1)] transition duration-200 cursor-grab   border rounded-3xl border-base-200 w-98 overflow-hidden h-73'>
            <h1 className='font-bold text-3xl text-shadow-main'>
              Let's work together
            </h1>

            <ClipboardButton />
          </div>
        </div>
      </div>

      <div className='flex inset-shadow-[0_0px_70px_rgba(30,30,30,1)] hover:inset-shadow-[0_0px_100px_rgba(30,30,30,1)] transition duration-200 cursor-grab  justify-start border rounded-3xl border-base-200 w-100 overflow-hidden h-150'>
        <Globe className="top-28" />
      </div>
    </main>
  )
}

export default Widgets 

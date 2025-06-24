import React from 'react'
import { Globe } from './globe'
import Image from 'next/image'
import ClipboardButton from './ClipboardButton'
import ActivityCalendar from 'react-activity-calendar'

const Widgets = () => {
  const data = [
    {
      date: '2024-08-02',
      count: 16,
      level: 4,
    },
    {
      date: '2024-11-29',
      count: 11,
      level: 3,
    },

    {
      date: '2025-06-23',
      count: 2,
      level: 1,
    },
  ]

  return (
    <main className='flex gap-4 justify-center'>
      <div className='flex flex-col gap-4'>
        <div className="flex items-center p-4 inset-shadow-[0_0px_70px_rgba(30,30,30,1)] hover:inset-shadow-[0_0px_100px_rgba(30,30,30,1)] transition duration-200 cursor-grab  justify-start border rounded-3xl border-base-200 w-200 overflow-hidden h-73">
          <div className="-z-1 relative  ">
            <ActivityCalendar colorScheme='dark' data={data} />
          </div>
        </div>
        <div className='flex flex-row gap-4'>
          <div className='inset-shadow-[0_0px_70px_rgba(30,30,30,1)] hover:inset-shadow-[0_0px_100px_rgba(30,30,30,1)] transition duration-200 cursor-grab  justify-start border rounded-3xl border-base-200 w-98 overflow-hidden h-73'>
          </div>
          <div className='flex flex-col gap-4 justify-center items-center inset-shadow-[0_0px_70px_rgba(30,30,30,1)] hover:inset-shadow-[0_0px_100px_rgba(30,30,30,1)] transition duration-200 cursor-grab   border rounded-3xl border-base-200 w-98 overflow-hidden h-73'>
            <h1 className='font-bold text-3xl text-center text-shadow-main'>
              Let's dive into your next project together
            </h1>
            <ClipboardButton />
          </div>
        </div>
      </div>
      <div className='flex inset-shadow-[0_0px_70px_rgba(30,30,30,1)] hover:inset-shadow-[0_0px_100px_rgba(30,30,30,1)] transition duration-200 cursor-grab  justify-start border rounded-3xl border-base-200 w-100 overflow-hidden h-150'>
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
      </div>
    </main>
  )
}

export default Widgets 

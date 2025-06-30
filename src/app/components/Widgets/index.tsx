import React from 'react'
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
    <main className='w-full max-w-7xl px-4 mx-auto'>
      <div className='mx-auto grid w-full grid-cols-6 gap-4 md:max-w-full md:auto-rows-[19rem] mb-20 md:my-20 '>
        <div className="relative w-full flex justify-between items-center inset-shadow-[0_0px_70px_rgba(30,30,30,1)] hover:inset-shadow-[0_0px_100px_rgba(30,30,30,1)] transition duration-200 cursor-grab border rounded-3xl border-base-200 col-span-4">
          <ActivityCalendar colorScheme='dark' data={data} />
        </div>
        {/* <div className='flex flex-row gap-4'> */}
        {/*   <div className='inset-shadow-[0_0px_70px_rgba(30,30,30,1)] hover:inset-shadow-[0_0px_100px_rgba(30,30,30,1)] transition duration-200 cursor-grab  justify-start border rounded-3xl border-base-200 w-98 overflow-hidden h-73'> */}
        {/*   </div> */}
        {/*   <div className='flex flex-col gap-4 justify-center items-center inset-shadow-[0_0px_70px_rgba(30,30,30,1)] hover:inset-shadow-[0_0px_100px_rgba(30,30,30,1)] transition duration-200 cursor-grab   border rounded-3xl border-base-200 w-98 overflow-hidden h-73'> */}
        {/*     <h1 className='font-bold text-3xl text-center text-shadow-main'> */}
        {/*       Let's dive into your next project together */}
        {/*     </h1> */}
        {/*     <ClipboardButton /> */}
        {/*   </div> */}
        {/* </div> */}
        <div className='group relative flex size-full flex-col justify-between overflow-hidden rounded-xl [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)] col-span-6 md:col-span-3 lg:col-span-2 md:row-span-2 max-md:h-[32rem]'>

        </div>

        <div className='group relative flex size-full flex-col justify-between overflow-hidden rounded-xl [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)] col-span-6 md:col-span-3 lg:col-span-2 max-md:h-[19rem]'>

        </div>
        <div className='group relative flex size-full flex-col justify-between overflow-hidden rounded-xl [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)] col-span-6 md:col-span-3 lg:col-span-2 max-md:h-[19rem]'>

        </div>
      </div></main>
  )
}

export default Widgets 

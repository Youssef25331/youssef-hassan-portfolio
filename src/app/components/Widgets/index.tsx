import React from 'react'
import ClipboardButton from './ClipboardButton'
import ActivityCalendar from 'react-activity-calendar'
import LocationWidget from './LocationWidget'
import ToolsWidget from './ToolsWidget'

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
      <div className='grid w-full grid-cols-6 gap-4 md:max-w-full md:auto-rows-[19rem] mb-20 md:my-20 '>
        <div className="inset-shadow-[0_0px_70px_rgba(30,30,30,1)] hover:inset-shadow-[0_0px_100px_rgba(30,30,30,1)] transition duration-200 border rounded-3xl border-base-200 col-span-4">
          <div className='w-full h-full flex justify-center  items-center'>
            <ActivityCalendar colorScheme='dark' data={data} />
          </div>
        </div>
        {/* <div className='flex flex-row gap-4 inset-shadow-[0_0px_70px_rgba(30,30,30,1)] hover:inset-shadow-[0_0px_100px_rgba(30,30,30,1)] border-base-200'> */}
        {/* </div> */}
        <div className='group relative flex size-full flex-col justify-between overflow-hidden inset-shadow-[0_0px_70px_rgba(30,30,30,1)] hover:inset-shadow-[0_0px_100px_rgba(30,30,30,1)] transition duration-200 border rounded-3xl border-base-200 col-span-6 md:col-span-3 lg:col-span-2 md:row-span-2 max-md:h-[32rem]'>
          <LocationWidget />
        </div>

        <div className='group relative flex size-full flex-col items-center justify-center  overflow-hidden inset-shadow-[0_0px_50px_rgba(30,30,30,1)] hover:inset-shadow-[0_0px_100px_rgba(30,30,30,1)] transition duration-200 border rounded-3xl border-base-200 col-span-6 md:col-span-3 lg:col-span-2 max-md:h-[19rem]'>
          <ToolsWidget />
        </div>

        <div className='group size-full flex-col justify-between overflow-hidden inset-shadow-[0_0px_50px_rgba(30,30,30,1)] hover:inset-shadow-[0_0px_100px_rgba(30,30,30,1)] transition duration-200 border rounded-3xl border-base-200 col-span-6 md:col-span-3 lg:col-span-2 max-md:h-[19rem]'>
          <div className='flex flex-col gap-4 justify-center items-center transition duration-200 cursor-grab  w-98 overflow-hidden h-73'>
            <h1 className='font-bold text-3xl text-center text-shadow-main'>
              Let's dive into your next project together
            </h1>
            <ClipboardButton />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Widgets 

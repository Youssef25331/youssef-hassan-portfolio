import React from 'react'
import ClipboardButton from './ClipboardButton'
import LocationWidget from './LocationWidget'
import ToolsWidget from './ToolsWidget'
import WidgetOverlay from './WidgetOverlay'
import Activity from './Activity'

const Widgets = () => {
  const toolGroup = [
    { name: 'Obsidian', icon: '/tools/obsidian.png' },
    { name: 'Vercel', icon: '/tools/Vercel.png' },
    { name: 'Neovim', icon: '/tools/neovim.png' },
    { name: 'Docker', icon: '/tools/docker.png' },
    { name: 'Notion', icon: '/tools/notion.png' },
    { name: 'Spotify', icon: '/tools/spotify.png' },
    { name: 'Figma', icon: '/tools/figma.png' },
    { name: 'KeePassXC', icon: '/tools/keepassxc.png' }
  ]
  return (
    <main className='w-full max-w-7xl px-4 mx-auto'>
      <div className='grid w-full grid-cols-6 gap-4 md:max-w-full  md:auto-rows-[19rem] mb-20 md:my-20 max-sm:min-w-[22rem]'>
        <div className="overflow-hidden transition duration-200 border rounded-3xl border-base-200 col-span-6 lg:col-span-4 max-md:h-[18rem]">
          <div className='group relative w-full h-full flex flex-col justify-center items-center '>
            <WidgetOverlay title='' text='' buttonText='Check it out' url='https://github.com/Youssef25331' >
              <h1 className='absolute max-md:text-lg text-2xl text-shadow-main top-5 md:top-7'>Activity is the heartbeat of innovation</h1>
              <div className="mt-5">
                <Activity />
              </div>
            </WidgetOverlay>
          </div>
        </div>
        <div className='group relative flex size-full flex-col justify-between overflow-hidden  transition duration-200 border rounded-3xl border-base-200 col-span-6 sm:col-span-3 md:col-span-3 lg:col-span-2 sm:row-span-2 max-md:h-[32rem] '>
          <WidgetOverlay title='Remote' text='Egypt' buttonText='Connect Now' iconName='mapPen' url={"mailto:yousseft25331@gmail.com?subject=Let's%20make%20your%20idea%20together"}>
            <LocationWidget />
          </WidgetOverlay>
        </div>
        <div className='group max-sm:h-[19rem]  relative border rounded-3xl border-base-200 col-span-6 sm:col-span-3  lg:col-span-2 overflow-hidden  flex inset-shadow-[0_0px_50px_rgba(30,30,30,1)] hover:inset-shadow-[0_0px_100px_rgba(30,30,30,1)] duration-200 '>
          <WidgetOverlay title='Tools' text='Some of my favorite tools out there' buttonText='Connect Now' iconName='notebookPen' >
            <ToolsWidget delay={60} group={toolGroup} />
          </WidgetOverlay>
        </div>
        <div className='bg-base-100 group size-full flex-col justify-between overflow-hidden inset-shadow-[0_0px_50px_rgba(30,30,30,1)] hover:inset-shadow-[0_0px_100px_rgba(30,30,30,1)] transition duration-200 border rounded-3xl border-base-200 col-span-6  sm:col-span-3 lg:col-span-2 max-sm:h-[19rem]'>
          <div className='flex flex-col gap-4 justify-center items-center transition duration-200 cursor-grab overflow-hidden h-full'>
            <h1 className='font-bold text-2xl lg:text-4xl sm:text-xl md:text-3xl text-center text-shadow-main'>
              Let's dive into your next<br />project together
            </h1>
            <ClipboardButton />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Widgets 

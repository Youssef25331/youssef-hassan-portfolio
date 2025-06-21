"use client"
import React from 'react'
import Image from 'next/image'

interface TechItem {
  name: string
  icon?: string
}
interface StackGroup {
  groupName: string
  items: TechItem[]
}
const TechGroup = ({ group }: { group: StackGroup }) => {

  return (
    <div className='flex justify-center gap-50'>
      <h1 className='text-5xl font-bold text-shadow-main basis-[100%] flex pl-[12.5%]'>{group.groupName}</h1>
      <div className='flex flex-wrap basis-[100%] gap-x-2 gap-y-2'>
        {group.items.map((item, index) => {
          return (
            <>
              <div className={` ${index % 3 == 0 ? "basis-full" : ""}`} ></div>
              <div className={`flex  gap-2`} key={item.name}>
                <div className="relative h-8 w-8 flex">
                  <Image layout={'fill'} objectFit={'contain'} src={item.icon || "/tech/react.png"} alt={item.name} />
                </div>
                <div className='text-2xl text-white/70'>{item.name}</div>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default TechGroup 

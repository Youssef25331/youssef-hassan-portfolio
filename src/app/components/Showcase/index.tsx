'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useScroll } from 'framer-motion'
import ShowcasePanel from './ShowcasePanel'
import { Console } from 'console'

interface StackItem {
  name: string
  icon: string,
}
interface SliderItem {
  projectName: string,
  projectDescription: string,
  quotes: string[],
  stack: StackItem[]
}

const Showcase = () => {
  const sliderRef = useRef<HTMLDivElement>(null)
  const sliderChild = useRef<HTMLDivElement>(null)
  const [activeSlide, setActiveSlide] = useState(0)

  const sliders: SliderItem[] = [
    {
      projectName: 'project one',
      projectDescription: 'notsure', quotes: ["so awesome", 'so sad'],
      stack: [{ icon: '/tech/tailwind.png', name: 'Tailwind' }],
    },
    {
      projectName: 'project two',
      projectDescription: 'notsure', quotes: ["so awesome", 'so sad'],
      stack: [{ icon: '/tech/tailwind.png', name: 'Tailwind' }],
    }
  ]
  useEffect(() => {
    console.log(activeSlide)
  }, [activeSlide])

  return (
    <main>
      <div className="flex flex-col justify-center gap-8">
        <h1 className='text-6xl text-shadow-main text-center'>Projects I worked on</h1>
        <div className="flex flex-row justify-center gap-6">
          <div className="flex flex-col gap-8">
            {
              sliders.map((item, i) => {
                return (
                  <ShowcasePanel key={sliders[i].projectName} sliderRef={sliderRef} sliderChild={sliderChild} slideNumber={i}
                    setActiveSlider={setActiveSlide} />
                )
              })
            }
          </div>
          <div className="sticky" ref={sliderRef}>
            <div className="sticky top-40" ref={sliderChild}>
              <div className="flex">
                <div className="my-4 mr-4 h-1 min-w-6 rounded-full bg-blue-700"></div>
                <div className="flex flex-col w-100 gap-8">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <h1 className='text-3xl'>{sliders[activeSlide].projectName}</h1>
                      <div className="flex flex-col">
                        <p className='text-sm text-base-content/70'>Lorem ipsum dolor sit amet,
                          officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia.</p>
                      </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                      <div className="flex items-center">
                        <div className="my-4 mr-4 h-1 min-w-2 rounded-full bg-blue-700"></div>
                        <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
                      </div>
                      <div className="flex items-center">
                        <div className="my-4 mr-4 h-1 min-w-2 rounded-full bg-blue-700"></div>
                        <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
                      </div>
                      <div className="flex items-center">
                        <div className="my-4 mr-4 h-1 min-w-2 rounded-full bg-blue-700"></div>
                        <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap w-120 gap-2">
                    <div className="flex justify-center border border-[#716C6C] rounded-3xl px-3 py-1 font-thin gap-2 text-white/70 inset-shadow-[0_0px_10px_rgba(30,30,30,1)]">
                      <div className="relative w-5">
                        <Image layout="fill" objectFit="contain" src={"/tech/tailwind.png"} alt='tailwind' />
                      </div>
                      <p>
                        Tailwind CSS
                      </p>
                    </div>
                    <div className="flex justify-center border border-[#716C6C] rounded-3xl  px-3 py-1 font-thin gap-2 text-white/70 inset-shadow-[0_0px_10px_rgba(30,30,30,1)]">
                      <div className="relative w-5">
                        <Image layout="fill" objectFit="contain" src={"/tech/tailwind.png"} alt='tailwind' />
                      </div>
                      <p>
                        Tailwind CSS
                      </p>
                    </div>
                    <div className="flex justify-center border border-[#716C6C] rounded-3xl  px-3 py-1 font-thin gap-2 text-white/70 inset-shadow-[0_0px_10px_rgba(30,30,30,1)]">
                      <div className="relative w-5">
                        <Image layout="fill" objectFit="contain" src={"/tech/tailwind.png"} alt='tailwind' />
                      </div>
                      <p>
                        Tailwind CSS
                      </p>
                    </div>
                    <div className="flex justify-center border border-[#716C6C] rounded-3xl  px-3 py-1 font-thin gap-2 text-white/70 inset-shadow-[0_0px_10px_rgba(30,30,30,1)]">
                      <div className="relative w-5">
                        <Image layout="fill" objectFit="contain" src={"/tech/tailwind.png"} alt='tailwind' />
                      </div>
                      <p>
                        Tailwind CSS
                      </p>
                    </div>
                    <div className="flex justify-center border border-[#716C6C] rounded-3xl  px-3 py-1 font-thin gap-2 text-white/70 inset-shadow-[0_0px_10px_rgba(30,30,30,1)]">
                      <div className="relative w-5">
                        <Image layout="fill" objectFit="contain" src={"/tech/tailwind.png"} alt='tailwind' />
                      </div>
                      <p>
                        Tailwind CSS
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Showcase

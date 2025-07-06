'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { useScroll } from 'framer-motion'

const Showcase = () => {
  const showcaseRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const sliderChild = useRef<HTMLDivElement>(null)

  const { scrollY } = useScroll()
  useEffect(() => {

    const updateAnimation = () => {
      if (showcaseRef.current && sliderRef.current && sliderChild.current) {
        const elementTop = showcaseRef.current.offsetTop
        const elementHeight = showcaseRef.current.offsetHeight
        const viewportHeight = window.innerHeight
        const viewportBottom = scrollY.get() + viewportHeight
        const sliderTop = sliderRef.current.offsetTop
        const sliderChildTop = sliderChild.current.offsetTop
        const middleDistance = (sliderTop + sliderChildTop) - (elementTop + (elementHeight / 2))
      }
    }
    updateAnimation()
    const unsubscribe = scrollY.onChange(updateAnimation)
    return () => unsubscribe()
  }, [scrollY])

  return (
    <main>
      <div className="flex flex-col justify-center gap-8">
        <h1 className='text-6xl text-shadow-main text-center'>Projects i worked on</h1>
        <div className="flex flex-row justify-center gap-6">
          <div className="flex flex-col gap-8">
            <div ref={showcaseRef} className="relative flex bg-[#121212] w-185 h-140 p-2 justify-center items-center rounded-3xl border border-base-200">
              <div className="absolute inset-x-0 top-0 w-full h-px"
                style={{
                  background: "linear-gradient(90deg, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, 0.8) 35%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0.8) 65%, rgba(0, 0, 0, 0) 95%)"
                }}
              ></div>
              <div className="relative flex overflow-hidden justify-center items-end bg-cyan-900 w-full h-full rounded-2xl" style={{ background: "linear-gradient(175deg,#0e282a 83%, #267076 100%)" }}>
                <div className="absolute inset-x-0 top-px z-10 h-[0.8px] opacity-70" style={{ background: "linear-gradient(90deg, rgba(0, 0, 0, 0) 20%, rgb(255, 255, 255) 50%, rgba(0, 0, 0, 0) 80%)" }}></div>
                <div className='w-140 h-90 border-t-1 border-x-1 border-[#1c1c1c] shadow-[0_0px_45px_#287176] rounded-t-md hover:w-155 hover:h-100 hover:translate-y-3 transition-all duration-500 hover:rotate-2 cursor-pointer'>
                  <img className='rounded-t-sm w-full h-full object-fill' src={"https://framerusercontent.com/images/eBewXVthrkfU83ygkD85hGPo.png"} />
                </div>
              </div>
            </div>
            <div className="relative flex bg-[#121212] w-185 h-140 p-2 justify-center items-center rounded-3xl border border-base-200">
              <div className="absolute inset-x-0 top-0 w-full h-px"
                style={{
                  background: "linear-gradient(90deg, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, 0.8) 35%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0.8) 65%, rgba(0, 0, 0, 0) 95%)"
                }}
              ></div>
              <div className="relative flex overflow-hidden justify-center items-end bg-cyan-900 w-full h-full rounded-2xl" style={{ background: "linear-gradient(175deg,#0e282a 83%, #267076 100%)" }}>
                <div className="absolute inset-x-0 top-px z-10 h-[0.8px] opacity-70" style={{ background: "linear-gradient(90deg, rgba(0, 0, 0, 0) 20%, rgb(255, 255, 255) 50%, rgba(0, 0, 0, 0) 80%)" }}></div>
                <div className='w-140 h-90 border-t-1 border-x-1 border-[#1c1c1c] shadow-[0_0px_45px_#287176] rounded-t-md hover:w-155 hover:h-100 hover:translate-y-3 transition-all duration-500 hover:rotate-2 cursor-pointer'>
                  <img className='rounded-t-sm w-full h-full object-fill' src={"https://framerusercontent.com/images/eBewXVthrkfU83ygkD85hGPo.png"} />
                </div>
              </div>
            </div>
          </div>
          <div className="sticky" ref={sliderRef}>
            <div className="sticky top-40" ref={sliderChild}>
              <div className="flex">
                <div className="my-4 mr-4 h-1 min-w-6 rounded-full bg-blue-700"></div>
                <div className="flex flex-col w-100 gap-8">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <h1 className='text-3xl'>Project name</h1>
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

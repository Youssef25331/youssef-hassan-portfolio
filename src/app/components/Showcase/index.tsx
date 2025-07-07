'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import ShowcasePanel from './ShowcasePanel'

interface StackItem {
  name: string
  icon: string,
}
interface SliderItem {
  projectName: string,
  projectDescription: string,
  quotes: string[],
  stack: StackItem[],
  color: string,
  image: string,
}
type StackName = 'React' | 'TypeScript' | 'NodeJS' | 'Python' | 'Tailwind' | 'NextJS' | 'FramerMotion'|'GSAP';

const stacks: Record<StackName, StackItem> = {
  React: { name: "React", icon: "/tech/react.png" },
  TypeScript: { name: "TypeScript", icon: "/tech/typescript.png" },
  NodeJS: { name: "Node.JS", icon: "/tech/node.png" },
  Tailwind: { name: "Tailwind CSS", icon: "/tech/tailwind.png" },
  Python: { name: "Python", icon: "python-icon.svg" },
  NextJS: { name: "Next.JS", icon: "/tech/next.png" },
  FramerMotion: { name: 'Framer Motion', icon: '/tech/framer.png' },
  GSAP: { name: 'GSAP', icon: '/tech/gsap.png' }
} as const

const Showcase = () => {
  const sliderRef = useRef<HTMLDivElement>(null)
  const sliderChild = useRef<HTMLDivElement>(null)
  const [activeSlide, setActiveSlide] = useState(0)

  const sliders: SliderItem[] = [
    {
      projectName: 'project one',
      projectDescription: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.', quotes: ["Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.", 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'],
      stack: [stacks.Tailwind, stacks.TypeScript, stacks.NextJS, stacks.React, stacks.FramerMotion, stacks.GSAP],
      image: "/projects/portfolio.png",
      color: "#0e282a"
    },
    {
      projectName: 'project two',
      projectDescription: 'Who cares', quotes: ["so awesome", 'so sad AND depressing'],
      stack: [stacks.NodeJS,],
      image: "/projects/mavoid.png",
      color: "#0c1e36"
    },

    {
      projectName: 'project three',
      projectDescription: 'Who cares', quotes: ["so awesome", 'so sad AND depressing'],
      stack: [stacks.NodeJS,],
      image: "/projects/moviedb.png",
      color: "#571163"
    },
    {
      projectName: '',
      projectDescription: 'Who cares', quotes: ["so awesome", 'so sad AND depressing'],
      stack: [stacks.NodeJS,],
      image: "/projects/mavoidportal.png",
      color: "#22166c"
    }
  ]


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
                    setActiveSlider={setActiveSlide} color={sliders[i].color} image={sliders[i].image} />
                )
              })
            }
          </div>
          <div className="sticky" ref={sliderRef}>
            <div className="sticky top-40" ref={sliderChild}>
              <div className="flex">
                <div className="my-4 mr-4 h-1 min-w-6 rounded-full"
                  style={{ backgroundColor: sliders[activeSlide].color }}
                ></div>
                <div className="flex flex-col w-100 gap-8">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <h1 className='text-3xl'>{sliders[activeSlide].projectName}</h1>
                      <div className="flex flex-col">
                        <p className='text-sm text-base-content/70'>{sliders[activeSlide].projectDescription}</p>
                      </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                      {sliders[activeSlide].quotes.map((quote, i) => {
                        return (
                          <div key={i} className="flex items-center">
                            <div className="my-4 mr-4 h-1 min-w-2 rounded-full"
                              style={{ backgroundColor: sliders[activeSlide].color }}
                            ></div>
                            <p>{quote}</p>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  <div className="flex flex-wrap w-120 gap-2">
                    {sliders[activeSlide].stack.map((e) => {
                      return (
                        <div key={e.name} className={`flex justify-center border border-[#716C6C] rounded-3xl px-3 py-1 font-thin gap-2 text-white/70 inset-shadow-[0_0px_10px_rgba(30,30,30,1)]`}>
                          <div className="relative w-5">
                            <Image layout="fill" objectFit="contain" src={e.icon} alt='tailwind' />
                          </div>
                          <p>
                            {e.name}
                          </p>
                        </div>
                      )
                    })}
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

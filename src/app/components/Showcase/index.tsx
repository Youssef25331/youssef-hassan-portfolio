'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import ShowcasePanel from './ShowcasePanel'
import { motion } from 'framer-motion'

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
  title: string,
  link: string
}
type StackName = 'React' | 'TypeScript' | 'NodeJS' | 'Python' | 'Tailwind' | 'NextJS' | 'FramerMotion' | 'GSAP' | 'Nginx' | 'daisyUI' | 'ExpressJS' | 'Shadcn' | 'Vercel' | 'Sass' | 'AuthJS' | 'MongoDB';

const stacks: Record<StackName, StackItem> = {
  React: { name: "React", icon: "/tech/react.png" },
  TypeScript: { name: "TypeScript", icon: "/tech/typescript.png" },
  NodeJS: { name: "Node.JS", icon: "/tech/node.png" },
  Tailwind: { name: "Tailwind CSS", icon: "/tech/tailwind.png" },
  Python: { name: "Python", icon: "python-icon.svg" },
  NextJS: { name: "Next.JS", icon: "/tech/next.png" },
  FramerMotion: { name: 'Framer Motion', icon: '/tech/framer.png' },
  GSAP: { name: 'GSAP', icon: '/tech/gsap.png' },
  Nginx: { name: 'Nginx', icon: '/tech/nginx.png' },
  daisyUI: { name: 'daisyUI', icon: '/tech/daisy.png' },
  ExpressJS: { name: 'Express.js', icon: '/tech/express.png' },
  Shadcn: { name: "Shadcn UI", icon: '/tech/shadcn.png' },
  Vercel: { name: "Vercel", icon: '/tech/vercel.png' },
  Sass: { name: "Sass", icon: '/tech/sass.png' },
  AuthJS: { name: "Auth.js", icon: '/tech/auth.png' },
  MongoDB: { name: 'MongoDB', icon: '/tech/mongo.png' }
} as const

const Showcase = () => {
  const sliderRef = useRef<HTMLDivElement>(null)
  const sliderChild = useRef<HTMLDivElement>(null)
  const [activeSlide, setActiveSlide] = useState(0)

  const sliders: SliderItem[] = [
    {
      projectName: 'MaVoid',
      projectDescription: 'The MaVoid website reflects our vision with a sleek, user-focused design, driven by my contributions to the front-end creation, featuring intuitive layouts and smooth interactions. I also provided minor back-end support to ensure seamless functionality, enhancing the overall digital experience for our clients.', quotes: ["Engineered with Next.js and React for a lightning-fast, dynamic user experience, this site showcases cutting-edge performance.", 'Styled with Tailwind CSS and enhanced by Framer Motion, it delivers a sleek, animated interface that captivates visitors.', 'Secured with Auth.js and structured with Shadcn UI, it offers robust authentication and a modern, customizable design.'],
      stack: [stacks.NextJS, stacks.React, stacks.FramerMotion, stacks.Tailwind, stacks.Shadcn, stacks.AuthJS],
      image: "/projects/mavoid.png",
      color: "#0c1e36",
      title: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      projectName: 'My Portfolio',
      projectDescription: 'My portfolio featuring cutting-edge web design and exceptional user experience, with polished layouts, fluid animations, and a showcase of my skills and projects using the latest tech.',
      quotes: ["Crafted using Next.js and TypeScript to ensure optimal performance and scalability.", "Showcasing a bold design philosophy, it blends cutting-edge aesthetics with effortless usability.", "Built to impress, it offers a smooth, responsive interface that adapts to every device with elegance."],
      stack: [stacks.Tailwind, stacks.NextJS, stacks.React, stacks.FramerMotion, stacks.GSAP, stacks.daisyUI, stacks.TypeScript, stacks.Vercel],
      image: "/projects/portfolio.png",
      color: "#0e282a",
      title: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },

    {
      projectName: 'MovieDB',
      projectDescription: 'MovieDB, built with React and Sass, and hosted on Vercel, brings the latest movies to your fingertips by querying MovieDB for fresh releases, complete descriptions, and trailers.', quotes: ["Features a sleek, stylish interface showcasing the newest movies with detailed insights.", 'Seamlessly integrates MovieDB data for real-time updates and trailer previews.'],
      stack: [stacks.React, stacks.Vercel, stacks.Sass],
      image: "/projects/moviedb.png",
      color: "#571163",
      title: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      projectName: 'MaVoid Unified Platform',
      projectDescription: 'The complete ERP and CRM solution designed specifically for Small and Medium Enterprises. Manage your entire business from one powerful platform.', quotes: ["Built with Node.js and Express.js, I helped craft a robust backend to handle core business operations seamlessly.", 'Enhanced with MongoDB, I ensured efficient data management and scalability for the platform.', 'Using React and Tailwind CSS, I contributed front-end tweaks for a polished, responsive user interface.', 'Integrated Nginx for optimized performance, with GSAP and Shadcn UI adding dynamic animations and modern styling, reflecting my collaborative efforts.'],
      stack: [stacks.Tailwind, stacks.NodeJS, stacks.React, stacks.GSAP, stacks.Nginx, stacks.ExpressJS, stacks.Shadcn, stacks.MongoDB],
      image: "/projects/mavoidportal.png",
      color: "#22166c",
      title: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
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
                    setActiveSlider={setActiveSlide} color={sliders[i].color} image={sliders[i].image} title={sliders[i].title} link={sliders[i].link} />
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
                        <p className='text-md text-base-content/70'>{sliders[activeSlide].projectDescription}</p>
                      </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                      {sliders[activeSlide].quotes.map((quote, i) => {
                        return (
                          <div key={i} className="flex items-center text-sm font-light">
                            <div className="my-4 mr-4 h-1 min-w-2 rounded-full"
                              style={{ backgroundColor: sliders[activeSlide].color }}
                            ></div>
                            <p>{quote}</p>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  <div className="flex flex-wrap w-100 gap-2">
                    {sliders[activeSlide].stack.map((e, i) => {
                      return (
                        <motion.div initial={{ opacity: i % 2 == 0 ? '0' : '100' }} animate={{ opacity: 100 }} transition={{ ease: "backInOut", duration: 0.5 }} key={e.name + activeSlide} className={`flex justify-center border border-[#716C6C] rounded-3xl px-3 py-1 font-thin gap-2 text-white/70 inset-shadow-[0_0px_10px_rgba(30,30,30,1)]`}>
                          <div className={`relative w-5 `}>
                            <Image layout="fill" objectFit="contain" src={e.icon} alt={e.name} />
                          </div>
                          <p>
                            {e.name}
                          </p>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main >
  )
}

export default Showcase

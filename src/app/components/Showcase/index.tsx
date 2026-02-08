'use client'
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import ShowcasePanel from './ShowcasePanel'
import { motion } from 'framer-motion'

export interface StackItem {
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
      title: "A landing page for our buisniss at MaVoid with an interactive UI ",
      link: "https://mavoid.com"
    },
    {
      projectName: 'Kalima Platform',
      projectDescription: 'Kalma is an e-learning platform designed to empower students from 4th grade primary to 12th grade secondary with a comprehensive range of educational resources. Tailored to support diverse learning needs, it offers engaging lessons, interactive exercises, and personalized study tools to foster academic growth. ',
      quotes: ["Built with React, TypeScript, and Tailwind CSS and Enhanced with Framer Motion the platform boasts a sleek UI that enhances the learning experience.", "Powered by Express.js, Nginx, and MongoDB, it provides a robust backend to manage student data, teacher profiles, and on-site teaching schedules seamlessly.", "Empowers teachers to oversee all their students and on-site instructors, ensuring comprehensive course management and student progress tracking.", "Flexible credit system where students can purchase credits or access custom offers crafted by teachers, adding personalized learning options."],
      stack: [stacks.React, stacks.Nginx, stacks.FramerMotion, stacks.MongoDB, stacks.ExpressJS, stacks.TypeScript, stacks.Tailwind,],
      image: "/projects/kalima.png",
      color: "#0f5446",
      title: "A platform connecting students and instructors for enhanced learning experiences.",
      link: "https://kalima-edu.com"
    },
    {
      projectName: 'My Portfolio',
      projectDescription: 'My portfolio featuring cutting-edge web design and exceptional user experience, with polished layouts, fluid animations, and a showcase of my skills and projects using the latest tech.',
      quotes: ["Crafted using Next.js and TypeScript to ensure optimal performance and scalability.", "Showcasing a bold design philosophy, it blends cutting-edge aesthetics with effortless usability.", "Built to impress, it offers a smooth, responsive interface that adapts to every device with elegance."],
      stack: [stacks.Tailwind, stacks.NextJS, stacks.React, stacks.FramerMotion, stacks.GSAP, stacks.daisyUI, stacks.TypeScript, stacks.Vercel],
      image: "/projects/portfolio.png",
      color: "#0b90d9",
      title: "A Striking Portfolio displaying Web Development and User-Centric Design",
      link: ""
    },

    {
      projectName: 'MovieDB',
      projectDescription: 'MovieDB, built with React and Sass, and hosted on Vercel, brings the latest movies to your fingertips by querying MovieDB for fresh releases, complete descriptions, and trailers.', quotes: ["Features a sleek, stylish interface showcasing the newest movies with detailed insights.", 'Seamlessly integrates MovieDB data for real-time updates and trailer previews.'],
      stack: [stacks.React, stacks.Vercel, stacks.Sass],
      image: "/projects/moviedb.png",
      color: "#571163",
      title: "A Movie/TV platform with real-time updates and trailer previews so you can always know what's new",
      link: "https://github.com/Youssef25331/simple-movie-app"
    },
    {
      projectName: 'MaVoid Unified Platform',
      projectDescription: 'The complete ERP and CRM solution designed specifically for Small and Medium Enterprises. Manage your entire business from one powerful platform.', quotes: ["Built with Node.js and Express.js, I helped craft a robust backend to handle core business operations seamlessly.", 'Enhanced with MongoDB, I ensured efficient data management and scalability for the platform.', 'Using React and Tailwind CSS, I contributed front-end tweaks for a polished, responsive user interface.', 'Integrated Nginx for optimized performance, with GSAP and Shadcn UI adding dynamic animations and modern styling, reflecting my collaborative efforts.'],
      stack: [stacks.Tailwind, stacks.NodeJS, stacks.React, stacks.GSAP, stacks.Nginx, stacks.ExpressJS, stacks.Shadcn, stacks.MongoDB],
      image: "/projects/mavoidportal.png",
      color: "#22166c",
      title: "From customer management to financial reporting all the tools you need to run your business efficiently",
      link: "https://portal.mavoid.com"
    }
  ]

  return (
    <main>
      <div className="flex justify-center px-4">
        <div className="flex flex-col gap-10 lg:gap-24 max-w-7xl">
          <h1 className='text-5xl max-sm:text-3xl lg:text-6xl text-shadow-main text-center'>Projects I worked on</h1>
          <div className="flex flex-row justify-between gap-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:flex lg:flex-col lg:gap-8 w-full  lg:max-w-[65%]">
              {
                sliders.map((item, i) => {
                  return (
                    <ShowcasePanel key={sliders[i].projectName} sliderRef={sliderRef} sliderChild={sliderChild} slideNumber={i}
                      setActiveSlider={setActiveSlide} color={sliders[i].color} image={sliders[i].image} title={sliders[i].title} link={sliders[i].link} name={sliders[i].projectName} stack={sliders[i].stack} />
                  )
                })
              }
            </div>
            <div className="hidden sticky lg:inline" ref={sliderRef}>
              <div className="sticky top-40" ref={sliderChild}>
                <div className="flex">
                  <div className="my-4 mr-4 h-1 min-w-6 rounded-full"
                    style={{ backgroundColor: `hsl(from ${sliders[activeSlide].color} h s 18%)` }}
                  ></div>
                  <div className="flex flex-col w-100 gap-8">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-2">
                        <h1 className='text-3xl'>{sliders[activeSlide].projectName}</h1>
                        <div className="flex flex-col">
                          <p className='text-md text-base-content/70'>{sliders[activeSlide].projectDescription}</p>
                        </div>
                      </div>
                      <div className='flex flex-col gap-2 '>
                        {sliders[activeSlide].quotes.map((quote, i) => {
                          return (
                            <div key={i} className="flex items-center text-sm font-light">
                              <div className="my-4 mr-4 h-1 min-w-2 rounded-full"
                                style={{ backgroundColor: `hsl(from ${sliders[activeSlide].color} h s 18%)` }}
                              ></div>
                              <p>{quote}</p>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                    <div className="flex flex-wrap w-100 gap-2 ">
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
      </div>
    </main >
  )
}

export default Showcase

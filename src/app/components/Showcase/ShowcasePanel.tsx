import { useScroll } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import React, { useEffect, useRef } from 'react'

const ShowcasePanel = ({ sliderRef, sliderChild, slideNumber, color, image, title, link, setActiveSlider }: {
  sliderRef: React.RefObject<HTMLDivElement | null>,
  sliderChild: React.RefObject<HTMLDivElement | null>,
  color: string,
  image: string,
  setActiveSlider: React.Dispatch<React.SetStateAction<number>>,
  slideNumber: number,
  title: string
  link: string
}) => {

  const showcaseRef = useRef<HTMLDivElement>(null)

  const { scrollY } = useScroll()

  useEffect(() => {

    const updateAnimation = () => {
      if (showcaseRef.current && sliderRef.current && sliderChild.current) {
        const elementTop = showcaseRef.current.offsetTop
        const elementHeight = showcaseRef.current.offsetHeight
        const sliderTop = sliderRef.current.offsetTop
        const sliderChildTop = sliderChild.current.offsetTop
        const topDifference = (elementTop) - (sliderTop + sliderChildTop)

        if (topDifference < (elementHeight / 2) + 32 && topDifference > -(elementHeight / 2)) {
          setActiveSlider(slideNumber)
        }
      }
    }
    updateAnimation()
    const unsubscribe = scrollY.onChange(updateAnimation)
    scrollY.setCurrent(200)
    return () => unsubscribe()
  }, [scrollY])

  return (
    <main>
      <div className="flex w-full lg:h-[550px]">
        <div ref={showcaseRef} className="relative flex bg-[#121212] w-full h-140 p-2 justify-center items-center rounded-3xl border border-base-200 lg:mx-10 ">
          <div className="absolute inset-x-0 top-0 w-full h-px"
            style={{
              background: "linear-gradient(90deg, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, 0.8) 35%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0.8) 65%, rgba(0, 0, 0, 0) 95%)"
            }}
          ></div>
          <div className="relative flex flex-col justify-between overflow-hidden items-center bg-cyan-900 w-full h-full rounded-2xl"
            style={{ background: `linear-gradient(180deg,${color} 63%, color-mix(in hsl, hsl(from ${color} h s 20%) 100%, ${color} 0%) 80%,color-mix(in hsl, hsl(from ${color} h s 30%) 100%, ${color} 0%) 100%)` }}>
            <div className="mt-10 mx-7 flex items-center">
              <h1
                className={`text-2xl font-light`}
                style={{ color: `hsl(from ${color} h s 70%)` }}
              >
                {title}
              </h1>
              <a href={link} target="_blank">
                <ArrowRight className='size-7'
                  style={{ color: `hsl(from ${color} h s 70%)` }}
                />
              </a>
            </div>
            <div className="absolute inset-x-0 top-px z-10 h-[0.8px] opacity-70" style={{ background: "linear-gradient(90deg, rgba(0, 0, 0, 0) 20%, rgb(255, 255, 255) 50%, rgba(0, 0, 0, 0) 80%)" }}></div>
            <a href={link} target='_blank' className='flex justify-center items-end  w-[80%] h-[60%] hover:w-[85%]  hover:h-[65%] hover:translate-y-3 transition-all duration-500 hover:rotate-2'>
              <div className='w-full h-full border-t-1 border-x-1
                border-[#1c1c1c] rounded-t-md  ' style={{ boxShadow: `0 0 46px color-mix(in hsl, hsl(from ${color} h s 50%) 100%, ${color} 0%)`, }}>
                <img className='rounded-t-sm w-full h-full object-cover' src={image} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </main >
  )
}

export default ShowcasePanel

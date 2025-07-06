import { useScroll } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

const ShowcasePanel = ({ sliderRef, sliderChild, slideNumber, setActiveSlider }: {
  sliderRef: React.RefObject<HTMLDivElement | null>,
  sliderChild: React.RefObject<HTMLDivElement | null>,
  setActiveSlider: React.Dispatch<React.SetStateAction<number>>,
  slideNumber: number
}) => {

  const showcaseRef = useRef<HTMLDivElement>(null)

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
        if (middleDistance > 0 && middleDistance < elementHeight / 2) {
          setActiveSlider(slideNumber + 1)
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
    </main>
  )
}

export default ShowcasePanel

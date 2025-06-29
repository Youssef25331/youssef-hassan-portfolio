import AnimatedButton from "../AnimatedButton"
import { BackgroundPaths } from "./paths"
import { Sparkles } from "./sparkles"

export default function Hero() {
  return (
    <div className="h-screen w-full  flex content-center overflow-visible">
      <div className="absolute -z-1 h-full w-full ">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,#021318_0%,#0b0b0b_70%,transparent_100%)] " />
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,#1b1b1b_0%,#2b2b2b_10%,transparent_100%)] " /> */}
      </div>
      <Sparkles
        density={1200}
        className="absolute -z-1 inset-0  w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        color={"#FFF"}
      ></Sparkles>
      <div className="mx-auto mt-55 w-full max-w-4xl">
        <div className="mb-5 mt-5 flex justify-center text-center">
          <p className='border border-base-200 rounded-4xl text-shadow-none shadow-none font-thin bg-white/10 overflow-hidden h-fit px-4 py-1 z-100 text-white/70'>
            welcome to my website
          </p>
        </div>
        <div className="text-center text-foreground ">
          <span className="text-6xl font-bold">
            Transform your ideas into
          </span>
          <br />
          <div className="text-6xl font-bold mt-3">
            beautiful digital experiences
          </div>
          <div className="mt-6">
            <span className="text-white/70 text-xl">
              Hi, I'm Youssef Hassan and Full Stack Developer and Software Engineer
            </span>
          </div >
        </div>
        <div className="mt-10 flex justify-center">
          <AnimatedButton text="Get In Touch" />
        </div>
      </div>
    </div>
  )
}



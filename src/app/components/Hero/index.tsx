import AnimatedButton from "../AnimatedButton"
import { BackgroundPaths } from "./paths"
import { Sparkles } from "./sparkles"

export default function Hero() {
  return (
    <div className="h-250 w-full  flex content-center overflow-visible">
      <div className="absolute -z-1 h-full w-full">
        <div className="absolute inset-0 "
          style={{ background: "radial-gradient(circle at 50% 1%,hsl(from var(--color-primary) h s 12%) 0%,#0b0b0b 70%,transparent 100%)" }}
        />
        <div
          className="z-2 absolute inset-0 pointer-events-none isolate opacity-30 contain-strict hidden lg:block">
        </div>
      </div>
      <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
      <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
      <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
      <Sparkles
        density={1200}
        className="absolute -z-1 inset-0  w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        color={"#FFF"}
      ></Sparkles>
      <div className="mx-auto mt-55 w-full max-w-4xl">
        <div className="mb-6 mt-5 flex justify-center text-center">
          <p className='border border-base-200 rounded-4xl  shadow-none  bg-white/10 overflow-hidden h-fit px-4 py-0.5 z-100 text-white backdrop-blur-lg text-shadow-main '>

            welcome to my website
          </p>
        </div>
        <div className="text-center text-foreground">
          <div className="text-6xl font-bold">
            Transform your ideas into
          </div>
          <div className="text-6xl font-bold mt-3 text-transparent bg-clip-text bg-gradient-to-b from-white to-[#062C3D] pb-2">
            Beautiful digital experiences
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



import AnimatedButton from "../AnimatedButton"
import { BackgroundPaths } from "./paths"
import { Sparkles } from "./sparkles"

export default function Hero() {
  return (
    <div className="h-screen w-full overflow-hidden flex content-center">
      <div className="absolute -z-1 h-full w-full overflow-hidden [mask-image:radial-gradient(0%,white,transparent)]">
        <div className="absolute -z-1 inset-0 before:absolute before:inset-0  bg-[radial-gradient(circle_at_top,#021318_0%,#0b0b0b_15%,transparent_70%)] before:opacity-100" />
        <Sparkles
          density={1200}
          className="absolute -z-1 inset-x-0 -0  w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
          color={"#FFF"}
        ></Sparkles>
      </div>
      <div className="mx-auto mt-55 w-full max-w-4xl">
        <div className="text-center text-foreground ">
          <span className="text-5xl font-bold">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
          </span>
          <br />
          <div className="mt-6">
            <span className="text-white/70">
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
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



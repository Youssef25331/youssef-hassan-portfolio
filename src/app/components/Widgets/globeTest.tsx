'use client'
import createGlobe from 'cobe';
import { animate, useMotionValue } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'

const GlobeTest = () => {

  const [activeCountry, setActiveCountry] = useState("")
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let [theta, setTheta] = useState(0);
  const thetaValue = useMotionValue(0)
  const phiValue = useMotionValue(0)
  let phi = useRef(0)

  const setSomethign = () => {
    setActiveCountry('stuff')
  }

  useEffect(() => {
    if (activeCountry) {

      const targetPhi = 3; // e.g., for 'shit'
      const targetTheta = 1;
      animate(phiValue, targetPhi, {
        duration: 2, ease: 'backInOut',

        onUpdate: (latest) => {
          phi.current = latest; // Update ref
          console.log(phi)
        },
      });
      animate(thetaValue, targetTheta, { duration: 2, ease: 'backInOut' });
    }
  }, [activeCountry, phiValue, thetaValue]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const globe = createGlobe(canvas!, {
      devicePixelRatio: 2,
      width: 1400,
      height: 1400,
      phi: 0,
      theta: 0,
      dark: 0,
      diffuse: 1.2,
      scale: 1,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [1, 0.5, 1],
      glowColor: [1, 1, 1],
      offset: [0, 0],
      markers: [
        { location: [28, 27], size: 0.1, },
        { location: [40, -95], size: 0.1, },
        { location: [35, 136], size: 0.1, },
      ],
      onRender: (state) => {
        state.phi = phi.current
        state.theta = thetaValue.get();
      },
    })
    return () => globe.destroy();

  }, []);


  return (
    <>
      <div className="flex relative top-22 justify-center w-full font-thin gap-2 z-10 ">
        <button className={`btn text-shadow-none border-none btn-soft leading-0 px-7 text-xs h-8 rounded-1xl ${activeCountry == "USA" ? "text-[color-mix(in_oklab,var(--color-primary)_100%,#ffffff_80%)] bg-primary" : "text-primary-content"}`} onClick={() => { setSomethign() }}>USA</button>
        {/* <button className={`btn text-shadow-none border-none btn-soft leading-0 px-7 text-xs h-8 rounded-1xl ${activeCountry == "Egypt" ? "text-[color-mix(in_oklab,var(--color-primary)_100%,#ffffff_80%)] bg-primary" : "text-primary-content"}`} onClick={() => { setLocation([4.3, 0.2], 'Egypt') }}>Egypt</button> */}
        {/* <button className={`btn text-shadow-none border-none btn-soft leading-0 px-7 text-xs h-8 rounded-1xl ${activeCountry == "Japan" ? "text-[color-mix(in_oklab,var(--color-primary)_100%,#ffffff_80%)] bg-primary" : "text-primary-content"}`} onClick={() => { setLocation([2.4, 0.3], "Japan") }}>Japan</button> */}
      </div>
      <div className={`mx-auto aspect-[1/1] w-full max-w-[600px] `}>
        <canvas
          className="relative -translate-x-[23%] translate-y-[6%] size-180  transition-opacity duration-500 [contain:layout_paint_size]"
          ref={canvasRef}
        // onPointerDown={(e) =>
        //   updatePointerInteraction(e.clientX - pointerInteractionMovement.current)
        // }
        // onPointerUp={() => updatePointerInteraction(null)}
        // onPointerOut={() => updatePointerInteraction(null)}
        // onMouseMove={(e) => updateMovement(e.clientX)}
        // onTouchMove={(e) =>
        //   e.touches[0] && updateMovement(e.touches[0].clientX)
        // }
        />
      </div>
    </>
  )
}

export default GlobeTest

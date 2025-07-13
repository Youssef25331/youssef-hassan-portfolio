"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useCallback, useEffect, useRef, useState } from "react";
import Color from "color";
import { animate, useMotionValue } from "framer-motion";

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    }
    : { r: 2, g: 19, b: 18 }; // Default color if parsing fails
}

// Default config without glowColor (we'll set it dynamically)
const DEFAULT_GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  opacity: 0.9,
  onRender: () => { },
  devicePixelRatio: 2,
  phi: 0,
  theta: 0,
  dark: 1,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [6 / 90, 54 / 90, 71 / 90],
  markerColor: [21 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [28, 27], size: 0.1, },
    { location: [40, -95], size: 0.1, },
    { location: [35, 136], size: 0.1, },
  ],
};

export function Globe({
  className,
  config: propConfig = DEFAULT_GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const phiValue = useMotionValue(0)
  const thetaValue = useMotionValue(0)
  const [activeCountry, setActiveCountry] = useState("")
  const isCountry = useRef(false)
  const [targetPhi, setTargetPhi] = useState(0)
  const [targetTheta, setTargetTheta] = useState(0)

  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const [r, setR] = useState(0);
  let width = 0;

  const [globeConfig, setGlobeConfig,] = useState<COBEOptions>(propConfig);

  useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    const fetchedColor = rootStyles.getPropertyValue('--color-primary').trim();
    const primaryColor = hexToRgb(fetchedColor);
    const mixColor1 = Color(primaryColor).mix(Color("#ffffff"), 0.34)
    const baseColor = mixColor1.rgb().array()

    const intensity = 255;
    const glowColor = [
      (primaryColor.r / intensity),
      (primaryColor.g / intensity),
      (primaryColor.b / intensity),
    ];

    setGlobeConfig((prevConfig) => ({
      ...prevConfig,
      glowColor: [glowColor[0], glowColor[1], glowColor[2]],
      baseColor: [baseColor[0] / intensity, baseColor[1] / intensity, baseColor[2] / intensity],
      markerColor: [glowColor[0], glowColor[1], glowColor[2]]
    }));
  }, []);

  // const updatePointerInteraction = (value: number | null) => {
  //   pointerInteracting.current = value;
  //   if (canvasRef.current) {
  //     canvasRef.current.style.cursor = value ? "grabbing" : "grab";
  //   }
  // };

  // const updateMovement = (clientX: number) => {
  //   if (pointerInteracting.current !== null) {
  //     const delta = clientX - pointerInteracting.current;
  //     pointerInteractionMovement.current = delta;
  //     setR(delta / 200);
  //   }
  // };

  const setLocation = (location: [number, number], country: string) => {
    isCountry.current = true
    setTargetPhi(location[0])
    setTargetTheta(location[1])
    setActiveCountry(country)
  }

  useEffect(() => {
      animate(phiValue, targetPhi, {
        duration: 2,
        ease: "easeInOut",
      })
      animate(thetaValue, targetTheta, {
        duration: 2,
        ease: "easeInOut",
      })

  }, [activeCountry])

  const onResize = () => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth;
    }
  };

  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);

    const globe = createGlobe(canvasRef.current!, {
      ...globeConfig,
      width: width * 2,
      height: width * 2,
      phi: phiValue.get(),
      theta: thetaValue.get(),
      onRender: (state) => {
        if (!isCountry.current) {
          state.phi = phiValue.get()
          phiValue.setCurrent((phiValue.get() - 0.005) %6.3)
        } else {
          state.phi = phiValue.get()
          state.theta = thetaValue.get()
        }
      },
    });

    setTimeout(() => {
      if (canvasRef.current) canvasRef.current.style.opacity = "1";
    });

    return () => globe.destroy();
  }, [globeConfig,]);

  return (
    <>
      <div className="flex relative top-22 justify-center w-full font-thin gap-2 z-10 ">
        <button className={`btn text-shadow-none border-none btn-soft leading-0 px-7 text-xs h-8 rounded-1xl ${activeCountry == "USA" ? "text-[color-mix(in_oklab,var(--color-primary)_100%,#ffffff_80%)] bg-primary" : "text-primary-content"}`} onClick={() => { setLocation([6.4, 0.4], 'USA') }}>USA</button>
        <button className={`btn text-shadow-none border-none btn-soft leading-0 px-7 text-xs h-8 rounded-1xl ${activeCountry == "Egypt" ? "text-[color-mix(in_oklab,var(--color-primary)_100%,#ffffff_80%)] bg-primary" : "text-primary-content"}`} onClick={() => { setLocation([4.3, 0.2], 'Egypt') }}>Egypt</button>
        <button className={`btn text-shadow-none border-none btn-soft leading-0 px-7 text-xs h-8 rounded-1xl ${activeCountry == "Japan" ? "text-[color-mix(in_oklab,var(--color-primary)_100%,#ffffff_80%)] bg-primary" : "text-primary-content"}`} onClick={() => { setLocation([2.4, 0.3], "Japan") }}>Japan</button>
      </div>
      <div className={`mx-auto aspect-[1/1] w-full max-w-[600px] ${className}`}>
        <canvas
          className="relative -translate-x-[23%] translate-y-[6%] size-180 opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
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
  );
}

"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useCallback, useEffect, useRef, useState } from "react";
import Color from "color";

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
  offset: [0, 100],
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [6 / 90, 54 / 90, 71 / 90],
  markerColor: [21 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
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
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const [r, setR] = useState(0);
  let phi = 0;
  let width = 0;

  // State to hold the dynamic glowColor
  const [globeConfig, setGlobeConfig] = useState<COBEOptions>(propConfig);

  // Fetch the color when the component mounts
  useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    const fetchedColor = rootStyles.getPropertyValue('--color-primary').trim();
    const primaryColor = hexToRgb(fetchedColor);
    console.log(fetchedColor)
    const mixColor1 = Color(primaryColor).mix(Color("#ffffff"), 0.34)
    const baseColor = mixColor1.rgb().array()

    const intensity = 255;
    const glowColor = [
      (primaryColor.r / intensity),
      (primaryColor.g / intensity),
      (primaryColor.b / intensity),
    ];

    // Update the config with the computed glowColor
    setGlobeConfig((prevConfig) => ({
      ...prevConfig,
      glowColor: [glowColor[0], glowColor[1], glowColor[2]],
      baseColor: [baseColor[0] / intensity, baseColor[1] / intensity, baseColor[2] / intensity],
      markerColor: [glowColor[0], glowColor[1], glowColor[2]]
    }));
  }, []);

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      setR(delta / 200);
    }
  };

  const onRender = useCallback(
    (state: Record<string, any>) => {
      if (!pointerInteracting.current) phi += 0.005;
      state.phi = phi + r;
      state.width = width * 2;
      state.height = width * 2;
    },
    [r],
  );

  const onResize = () => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...globeConfig,
      width: width * 2,
      height: width * 2,
      onRender,
    });

    setTimeout(() => {
      if (canvasRef.current) canvasRef.current.style.opacity = "1";
    });

    return () => globe.destroy();
  }, [globeConfig, onRender]); // Re-run when globeConfig changes

  return (
    <div className={`mx-auto aspect-[1/1] w-full max-w-[600px] ${className}`}>
      <canvas
        className="relative -translate-x-[23%] translate-y-[6%] size-180 opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        ref={canvasRef}
        onPointerDown={(e) =>
          updatePointerInteraction(e.clientX - pointerInteractionMovement.current)
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}

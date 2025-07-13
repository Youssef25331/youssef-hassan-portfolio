"use client";
import ReactLenis, { LenisRef } from "lenis/react";
import { useEffect, useRef } from "react";

const LenisScrollProvider = () => {
  const lenisRef = useRef<LenisRef>(null)


  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time)
    }

    const rafId = requestAnimationFrame(update)

    console.log(lenisRef)
    return () => cancelAnimationFrame(rafId)

  }, [])

  return (
    <ReactLenis root ref={lenisRef} />)
};

export default LenisScrollProvider;

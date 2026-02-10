"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother"; // Premium Plugin
import { useGSAP } from "@gsap/react";

// Register plugins globally to avoid issues with React Strict Mode
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothScroller({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    // ScrollSmoother.create returns the instance, but we don't need to store it 
    // unless we want to call methods on it later.
    ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      smooth: 1.5, // How long (in seconds) it takes to "catch up" to the native scroll position
      effects: true, // Looks for data-speed and data-lag attributes on elements
      smoothTouch: 0.1, // Optional: creates a slight smoothing on touch devices
    });

    // Clean up is handled automatically by useGSAP!
  }, { scope: wrapperRef }); // Scope is optional but good practice

  return (
    // Essential DOM structure for ScrollSmoother
    <div id="smooth-wrapper" ref={wrapperRef}>
      <div id="smooth-content" ref={contentRef}>
        {children}
      </div>
    </div>
  );
}

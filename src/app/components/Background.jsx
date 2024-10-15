"use client"

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Background = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    gsap.to(elementRef.current, {
      duration: 5,
      background: "linear-gradient(45deg, #0000ff, #ff0000)",
      ease: "linear",
      yoyo: true,
      repeat: -1
    })
  }, []);

  return (
    <div
      ref={elementRef}
      style={{
        height: "100%",
        background: "linear-gradient(45deg, #ff0000, #0000ff)",
      }}
    />
  );
};

export default Background;

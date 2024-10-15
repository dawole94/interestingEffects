"use client"

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Background = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to(elementRef.current, {
      duration: 5,
      background: "linear-gradient(45deg, #0000ff, #ff0000)",
      // backgroundSize: "300% 300%",
      backgroundPosition: "0% 0%",
      ease: "linear"
    })
    .to(elementRef.current, {
      duration: 0,
      backgroundPosition: "100% 100%",
      ease: "linear",
      // background: "linear-gradient(45deg, #0000ff, #ff0000)",
      // backgroundSize: "300% 300%",
    });

  }, []);

  return (
    <div
      ref={elementRef}
      style={{
        // width: "100%",
        height: "100%",
        background: "linear-gradient(45deg, #ff0000, #0000ff)",
        backgroundSize: "300% 300%"
      }}
    />
  );
};

export default Background;

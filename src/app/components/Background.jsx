"use client"

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Background = () => {
  const elementRef = useRef(null);

  useEffect(() => {

    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to(elementRef.current, {
      duration: 5,
      backgroundImage: "linear-gradient(45deg, rgb(211, 59, 59), rgb(44, 44, 251))",
      ease: "linear",
      delay: 2
    })
    .to(elementRef.current, {
      duration: 2,
      backgroundImage: "linear-gradient(45deg, rgb(211, 59, 59), rgb(44, 44, 251))",
    })
    .to(elementRef.current, {
      duration: 5,
      backgroundImage: "linear-gradient(45deg, rgb(44, 44, 251), rgb(211, 59, 59))",
      ease: "linear",
    })
    .to(elementRef.current, {
      duration: 2,
      backgroundImage: "linear-gradient(45deg, rgb(44, 44, 251), rgb(211, 59, 59))",
    })
  }, []);

  return (
    <div
      ref={elementRef}
      className="bg-custom-gradient h-full"
    />
  );
};

export default Background;

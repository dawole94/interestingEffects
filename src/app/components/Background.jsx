"use client"

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Background = () => {
  const elementRef = useRef(null);
  const starContainerRef = useRef(null);

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

    const count = window.innerWidth<=640 ? 200 : 75, 
          starClass = "star",
          starColors = ["lightgrey", "yellow", "orange", "lightpink"],
          starContainer = starContainerRef.current,
          w = starContainer.offsetWidth,
          h = starContainer.offsetHeight;
    let star;

    for(let i = 0; i <= count; i++) {
      star = document.createElement('div');
      star.className = starClass;
      starContainer.appendChild(star);
      gsap.set(star, {
        x : gsap.utils.random(0,w),
        y : gsap.utils.random(0,h)-h*0.5,
        scale: gsap.utils.random(0.5,1),
        backgroundColor: gsap.utils.random(starColors)
      });
      gsap.to(star, gsap.utils.random(3,7), {
        y: h,
        repeat: -1,
        ease: "none",
        delay: -10
      });
      gsap.to(star, gsap.utils.random(1,5), {
        x: "+=50",
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true
      })
      gsap.to(star, gsap.utils.random(1,2), {
        opacity: 0,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true
      })
      gsap.to(star, gsap.utils.random(2,4), {
        rotation: 360,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true
      })

    }

  }, []);

  return (
    <div ref={elementRef} className="bg-custom-gradient h-full w-full left-0 top-0 fixed -z-10">
      <div className="relative w-full h-full overflow-hidden" ref={starContainerRef}></div>
    </div>
  );
};

export default Background;

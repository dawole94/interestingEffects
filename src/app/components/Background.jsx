"use client"

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import Star from "./Star";

const Background = () => {
  const elementRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {

    if(elementRef.current) {
      setHeight(elementRef.current.scrollHeight)
    }

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
    });

    // Aktualizacja wysokości przy zmianie rozmiaru okna
    const handleResize = () => {
      if (elementRef.current) {
        setHeight(elementRef.current.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);

    // Czyszczenie event listenera przy odmontowaniu
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const starsCount = 1000;
  let stars = [];
  for(let i=0; i<=starsCount;i++) {
    stars.push(<Star key={`${i}-${Date.now()}`} height={height}/>)
  }

  return (
    <div ref={elementRef} className="bg-custom-gradient h-full w-full overflow-hidden">
      <div className="absolute top-4 left-4 right-4 bottom-4">
        {...stars}
      </div>
    </div>
  );
};

export default Background;

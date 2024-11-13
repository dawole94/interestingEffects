import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Explosion = () => {
  const mainContainerRef = useRef();
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(mainContainerRef.current, {opacity: 0, x: 100},
      {
      opacity: 1,
      x:0,
      duration: 1,
      scrollTrigger: {
        trigger: mainContainerRef.current,
        start: 'top 60%',
        end: 'top 20%',
        toggleActions: "play none none reverse"
      }
    })
  }, []);

  const explode = () => {
    const particles = containerRef.current.children;

    Array.from(particles).forEach((particle) => {
      const angle = Math.random() * Math.PI * 2; // Losowy kąt
      const distance = Math.random() * 100 + 100; // Losowa odległość

      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;

      gsap.set(particle, { opacity: 1 });
      gsap.to(particle, {
        x: x,
        y: y,
        scale: Math.random() * 1.5 + 0.3,
        opacity: 0,
        duration: Math.random() * 1 + 0.5,
        ease: "power3.out",
        onComplete: () => gsap.set(particle, { x: 0, y: 0, opacity: 1, scale: 1 }),
      });
    });
  };

  return (
    <div ref={mainContainerRef} className="flex flex-col items-center">
      <div
        id="explosion-container"
        ref={containerRef}
        onClick={explode}
        style={{ position: "relative", width: "10rem", height: "10rem" }}
      >
        {Array.from({ length: 15 }).map((_, index) => (
          <div key={index} className="particle"></div>
        ))}
      </div>
      <button onClick={explode} className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition-all duration-200">
        Explode particle
      </button>
    </div>
  );
};

export default Explosion;

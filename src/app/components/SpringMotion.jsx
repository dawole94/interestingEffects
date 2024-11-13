import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";


const SpringMotion = () => {
  const springRef = useRef(null);
  const massRef = useRef(null);
  const animationRef = useRef(null); // Referencja do animacji
  const [isAnimating, setIsAnimating] = useState(false); // Czy animacja jest włączona?
  const mainContainerRef = useRef();

  const toggleAnimation = () => {
    if (isAnimating) {
      // Jeśli animacja jest włączona, zatrzymaj ją
      animationRef.current.pause();
    } else {
      // Jeśli animacja jest wyłączona, uruchom ją
      animationRef.current.play();
    }
    setIsAnimating(!isAnimating); // Przełącz stan animacji
  };

  useEffect(() => {

    gsap.fromTo(mainContainerRef.current, {opacity: 0, x: -100},
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

    const spring = springRef.current;
    const mass = massRef.current;

    animationRef.current = gsap.to(mass, {
      y: 150, // Przesunięcie masy w dół
      duration: 2, // Czas trwania ruchu
      ease: "elastic.out(1.5,0.1)", 
      repeat: -1, // Nieskończona animacja
      yoyo: true, // Powrót do pozycji początkowej
      paused: true,
      onUpdate: () => {
        // Skalowanie sprężyny na podstawie położenia masy
        const scale = 1 + Math.abs(gsap.getProperty(mass, "y") / 150);
        gsap.set(spring, { scaleY: scale });
      },
    });
  }, []);

  return (
    <div ref={mainContainerRef} className="flex flex-col items-center">
      <div className="spring-container">
        <svg
          viewBox="0 0 100 300"
          xmlns="http://www.w3.org/2000/svg"
          className="spring-svg"
        >
          <path
            ref={springRef}
            d="M50 0 Q 30 20, 50 40 T 50 60 T 50 80 T 50 100 T 50 120 T 50 150"
            fill="none"
            stroke="#888"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
        <div ref={massRef} className="mass"></div>
      </div>
      <button 
        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition-all duration-200"
        onClick={toggleAnimation}
      >
        {isAnimating ? "Stop this crazy spring motion" : "Start spring motion"}
      </button>
    </div>
    
  );
};

export default SpringMotion;

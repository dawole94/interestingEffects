import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const RotatingMotionPathOnScroll = () => {
  const elementRef = useRef();
  const containerRef = useRef();

  useEffect(() => {

    const containerWidth = containerRef.current.offsetWidth;
    const elementWidth = elementRef.current.offsetWidth;
    const expectedWidth = containerWidth - elementWidth;

    gsap.to(elementRef.current, {
      duration: 60, // Czas animacji
      ease: "power1.inOut",
      motionPath: {
        path: 
        [
          { x: expectedWidth, y: '50 rem' },
          { x: expectedWidth, y: '100 rem'},
          { x: 0, y: '150 rem' },
          { x: 0, y: '200 rem'},
          { x: expectedWidth, y: '250 rem'},
          { x: expectedWidth, y: '300 rem'},
          { x: 0, y: '350 rem' },
          { x: 0, y: '400 rem'},
          { x: expectedWidth, y: '450 rem'},
          { x: expectedWidth, y: '500 rem'},
          { x: 0, y: '550 rem' },
          { x: 0, y: '600 rem'},
          { x: expectedWidth, y: '650 rem'},
          { x: expectedWidth, y: '700 rem'},
        ],
        align: "self",
        alignOrigin: [0.5, 0.5],
        autoRotate: true
      },
      scrollTrigger: {
        trigger: elementRef.current, // Element wyzwalający animację
        start: "top 40%", // Start animacji, gdy element jest w 80% widoku
        end: "top 0%", // Koniec animacji, gdy element osiągnie 20% widoku
        scrub: 2, // Animacja płynna zgodnie z przewijaniem
      }
    });
  }, []);

  return (
    <div className="mt-20 flex justify-center" style={{height: '50rem'}}>
      <div ref={containerRef} className="w-[80%]" style={{height: '50rem'}}>
        <img ref={elementRef} src="images/rocket.png"
        style={{ width: '7rem', height: '7rem', objectFit: 'cover' }} 
        />
      </div>
    </div>
  );
};

export default RotatingMotionPathOnScroll;
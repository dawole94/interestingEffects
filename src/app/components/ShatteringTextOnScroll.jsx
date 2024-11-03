import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const ShatteringTextOnScroll = () => {
  const textRef = useRef();

  useEffect(() => {
    // Rozbij tekst na osobne litery
    const splitText = new SplitType(textRef.current, { types: 'chars' });

    // Stwórz animację rozpadu i scalania przy przewijaniu
    gsap.fromTo(
      splitText.chars,
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotation: 0,
      },
      {
        opacity: 0,
        x: () => gsap.utils.random(-200, 200), // losowe przesunięcie na osi X
        y: () => gsap.utils.random(-200, 200), // losowe przesunięcie na osi Y
        scale: 0.5,
        rotation: () => gsap.utils.random(-180, 180), // losowy obrót
        duration: 5,
        stagger: 0.05,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current, // wyzwalacz ScrollTrigger
          start: 'top 40%', // rozpoczyna animację, gdy tekst pojawi się w 80% wysokości ekranu
          end: 'top 0%', // kończy animację, gdy tekst znajdzie się w 20% wysokości ekranu
          scrub: true, // animacja płynna podczas przewijania
          toggleActions: 'play none none reverse', // uruchom rozpadową animację przy przewijaniu w dół i scalającą przy przewijaniu w górę
        },
      }
    );
  }, []);

  return (
    <h1 ref={textRef} className='text-white text-3xl font-bold mt-20' 
    style={{textAlign: 'center' }}
    >
      ...we can fly a rocket...
    </h1>
  );
};

export default ShatteringTextOnScroll;
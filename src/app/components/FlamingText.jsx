import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const FlamingText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    // Animacja delikatnego płonącego tekstu w pastelowych odcieniach błękitu
    gsap.fromTo(
      textRef.current,
      {
        color: '#6fa3f7', // bardzo jasny, delikatny błękit
        textShadow: '0px 0px 15px rgba(193, 221, 255, 0.6)', // delikatny cień na start
      },
      {
        color: '#c4e0ff', // bardzo jasny, subtelniejszy błękit
        duration: 3,
        textShadow: '0px 0px 25px rgba(193, 221, 255, 0.5), 0px 0px 35px rgba(193, 221, 255, 0.3)',
        repeat: -1, // animacja w pętli
        yoyo: true, // cofanie efektu
        ease: 'sine.inOut', // płynne przejście
      }
    );
  }, []);

  return (
    <div className="sm:w-[65%] w-[80%] text-4xl" style={{fontWeight: 'bold', color: '#6fa3f7' }}>
      <p ref={textRef}>We project and design websites with interesting effects. The powerfull animations and 3D objects make really the coding to be not only technical skill, but also some kind of art.</p>
    </div>
  );
};

export default FlamingText;
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const FeatherFall = () => {
  const featherRef = useRef(null);

  useEffect(() => {

    // gsap.set(featherRef.current, {opacity: 0});
    const tl = gsap.timeline({repeat: -1});
    // Animacja opadająca
    tl.to(featherRef.current, {
      opacity: 1,
      duration: 1, 
      ease: "power1.out", 
    })
    .to(featherRef.current, {
      opacity: 1,
      duration: 8, 
    })
    .to(featherRef.current, {
      // delay: 9,
      opacity: 0,
      duration: 1, 
      ease: "power1.out", 
    });

    gsap.to(
      featherRef.current,
      {
        // rotation: gsap.utils.random(-10, 5), // wychylenie
        duration: 2, // czas jednego ruchu wahadłowego
        ease: "sine.inOut", // płynny ruch wahadłowy
        repeat: -1, // w nieskończoność w ramach timeline
        yoyo: true, // cofanie rotacji
        onRepeat: () => {
          gsap.to(featherRef.current, {
            rotation: gsap.utils.random(-10, 5), // losowa nowa wartość przy każdym cyklu
            duration: 2, // płynna animacja kołysania
            ease: "sine.inOut",
            repeat: -1, // jeden cykl wychylenia (tam i z powrotem)
            yoyo: true,
          });
        },
      }// Rozpocznij animację kołysania od początku timeliny
    );

    gsap.to(featherRef.current, {
      y: '70vh', // długość spadania
      duration: 10, // czas spadania
      ease: "power1.out", // zwalnianie na końcu, jak opór powietrza
      repeat: -1,
    });

    // Animacja kołysania (wahadłowa)
    gsap.to(featherRef.current, {
      x: '30vw', // wychylenie
      duration: 2, // czas jednego ruchu wahadłowego
      ease: "sine.inOut", // płynny ruch wahadłowy
      repeat: -1, // w nieskończoność
      yoyo: true, // cofanie rotacji
    });

    // gsap.to(featherRef.current, {
    //   opacity: 0,
    //   delay: 9,
    //   duration: 1,
    // })
  }, []);

  return (
    <div className="relative w-100 h-screen">
      <img ref={featherRef} src="images/feather.png"
        style={{
          width: "30rem",
          height: "15rem",
          objectFit: 'fill',
          opacity: 0
          // backgroundColor: "lightblue",
          // borderRadius: "50%",
          // transformOrigin: "center", // ustawienie środka obrotu
          // position: "absolute",
          // top: "0",
        }}
      />
    </div>
  );
};

export default FeatherFall;
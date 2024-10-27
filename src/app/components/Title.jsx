import React from 'react';
import {Kablammo} from '@next/font/google';
import {gsap, TextPlugin} from 'gsap/all';
import {useRef, useEffect} from 'react';

gsap.registerPlugin(TextPlugin);

const kablammo = Kablammo({
  subsets: ['latin'],
  weight: '400',
});

const Title = () => {

  const interestingRef = useRef(null);
  const effectsRef = useRef(null);
  const divRef = useRef(null)

  useEffect(() => {
    // gsap.set(interestingRef.current, {text: "INTERESTING", opacity:0});
    gsap.to(interestingRef.current, {
      delay: 1.25,
      duration: 1,
      text: "INTERESTING",
      // opacity: 1
    })
    // gsap.set(effectsRef.current, {text: "EFFECTS", opacity:0});
    gsap.to(effectsRef.current, {
      delay: 2.25,
      duration: 1,
      text: "EFFECTS",
      // opacity: 1
    });

    const tl = gsap.timeline({ repeat: -1 });

    tl.to(divRef.current, {
      delay: 3.5,
      duration: 1,
      transition: 2,
      opacity: 0,
    })
    .to(divRef.current, {
      delay: 0.5,
      duration: 1,
      transition: 2,
      opacity: 1,
      ease: "power1.inOut"
    })
  }, []
  )

  return (
    <div ref={divRef} className={`title h-1/3 text-5xl sm:h-40 sm:text-7xl text-white font-bold flex flex-col items-center justify-center ${kablammo.className}`}>
      <p ref={interestingRef}></p>
      <p ref={effectsRef}>
      {/* <svg className="inline" width="2.5rem" height="2.25rem" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.25rem" y="0" width="1" height="2.25rem" fill="black"/>
      <rect x="0" y="0" width="2.5rem" height="1" fill="black"/>
      </svg> */}
      </p>
    </div>
  )
}

export default Title
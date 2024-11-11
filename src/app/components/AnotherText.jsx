import React from 'react'
import {gsap, TextPlugin, ScrollTrigger} from 'gsap/all';
import {useRef, useEffect} from 'react';

gsap.registerPlugin(TextPlugin, ScrollTrigger);

const AnotherText = () => {

  const pRef = useRef();
  const divRef = useRef();

  useEffect(() => {
    gsap.to(pRef.current, {
      duration: 2,
      text: "And we can do another cool things...",
      scrollTrigger: {
        trigger: pRef.current,
        start: "top 60%",
        end: "top 20%",
        // markers: true,
        scrub: true,
        toggleActions: 'play none none reverse'
      }
    })
  },[])

  return (
    <div className='flex justify-center'>
      <div ref={divRef} className="w-[68%] h-40 text-white text-3xl font-bold flex justify-end">
        <p ref={pRef}></p>
      </div>
    </div>
  )
}

export default AnotherText
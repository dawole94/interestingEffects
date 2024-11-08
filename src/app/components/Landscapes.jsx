"use client"

import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {useRef, useEffect} from 'react'

gsap.registerPlugin(ScrollTrigger);

const Landscapes = () => {

  const textRef = useRef();
  const img1 = useRef();
  const img2 = useRef();
  const img3 = useRef();
  const img4 = useRef();
  const imgContainerRef = useRef();

  const handleMouseEnter = (ref) => {
    if (ref.current) {
      document.querySelector('.active').classList.remove('active');
      ref.current.classList.add('active');
      ref.current.style.cursor = 'pointer'
      ref.current.style.transition = 1;
    }
  };

  // const handleMouseLeave = (ref) => {
  //   if (ref.current) {
  //     ref.current.classList.remove('active');
  //   }
  // };

  useEffect(() => {
    gsap.set(textRef.current, {y: 100, opacity: 0})
    gsap.to(textRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: textRef.current, // element, który wywołuje animację
        // start: "top 80%", // punkt, w którym animacja się zaczyna
        // end: "top 20%", // punkt, w którym animacja się kończy
        // scrub: 1, // animacja płynna wraz z przewijaniem
        scrub: true,
        toggleActions: "play none none reverse", // jak zachowa się animacja (odtwarzanie, pauza itp.)
      },
    });
  
  let images = imgContainerRef.current.querySelectorAll('img');
    gsap.set(images, {opacity: 0})
    gsap.to(images, {
      opacity: 1,
      stagger: 0.3, // opóźnienie między kolejnymi obrazkami
      duration: 1,
      scrollTrigger: {
        trigger: imgContainerRef.current, // wyzwalacz animacji
        start: "top 60%", // animacja zaczyna się, gdy kontener znajdzie się w 80% wysokości okna
        end: "top 20%",
        scrub: true,
        toggleActions: "play none none reverse", // uruchamia animację przy przewijaniu
      },
    });
}, []);

  return (
    <div className='flex flex-col items-center gap-20 mt-16'>
      <p ref={textRef} className='text-white text-center text-3xl font-bold w-[80%]'>In our world we can animate many things like for example landscape's pictures.</p>
      <div ref={imgContainerRef} className="img-container flex justify-between w-[80%]" style={{height:'30rem'}}>
        <img ref={img1} className="w-[18.5%] h-[100%] object-cover" src="/images/Beach.jpg" onMouseEnter={()=> {handleMouseEnter(img1)}}/>

        <img ref={img2} className="w-[18.5%] active h-[100%] object-cover" src="/images/Forest.jpg" onMouseEnter={()=> {handleMouseEnter(img2)}}/>

        <img ref={img3} className="w-[18.5%] h-[100%] object-cover" src="/images/River.jpg" onMouseEnter={()=> {handleMouseEnter(img3)}}/>

        <img ref={img4} className="w-[18.5%] h-[100%] object-cover" src="/images/Road.avif" onMouseEnter={()=> {handleMouseEnter(img4)}}/>
      </div>
    </div>
  )
}

export default Landscapes
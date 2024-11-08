import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {useRef, useEffect} from 'react'

gsap.registerPlugin(ScrollTrigger);

const LandscapesSmall = () => {

  const textRef = useRef();
  const img1 = useRef();
  const img2 = useRef();
  const img3 = useRef();
  const img4 = useRef();
  const imgContainerSmallRef = useRef();

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
        toggleActions: "play none none reverse", // jak zachowa się animacja (odtwarzanie, pauza itp.)
      },
    });

    let images = imgContainerSmallRef.current.querySelectorAll('img');
    gsap.set(images, {opacity: 0})
    gsap.to(images, {
      opacity: 1,
      stagger: 0.5, // opóźnienie między kolejnymi obrazkami
      duration: 1,
      scrollTrigger: {
        trigger: imgContainerSmallRef.current, // wyzwalacz animacji
        start: "top 80%", // animacja zaczyna się, gdy kontener znajdzie się w 80% wysokości okna
        toggleActions: "play none none reverse", // uruchamia animację przy przewijaniu
      },
    });
  }, [])

  return (
    <div className="flex flex-col items-center gap-16">
      <p ref={textRef} className='text-white text-center text-3xl font-bold w-[80%]'>In our world we can animate many things like for example landscape's pictures.</p>
      <div ref={imgContainerSmallRef} className="img-container-small flex flex-wrap justify-center items-center gap-4 w-[80%]" /*style={{height:'30rem'}}*/>
        <img ref={img1} className="w-[45%] object-cover" src="/images/Beach.jpg" style={{height:'8rem'}}/>

        <img ref={img2} className="w-[45%] object-cover" src="/images/Forest.jpg" style={{height:'8rem'}}/>

        <img ref={img3} className="w-[45%] object-cover" src="/images/River.jpg" style={{height:'8rem'}}/>

        <img ref={img4} className="w-[45%] object-cover" src="/images/Road.avif" style={{height:'8rem'}}/>
      </div>
    </div>
  )
}

export default LandscapesSmall
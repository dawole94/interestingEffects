import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Flip);

const RandomCardShuffle = () => {
  const containerRef = useRef();
  const mainContainerRef = useRef();

  const handleShuffle = () => {
    const cards = Array.from(containerRef.current.children);
    const state = Flip.getState(cards);

    // Shuffle the cards array randomly
    const shuffledCards = [...cards].sort(() => Math.random() - 0.5);

    // Apply the shuffled order to the DOM
    shuffledCards.forEach((card, index) => {
      containerRef.current.appendChild(card);
    });

    // Animate the cards with Flip plugin
    Flip.from(state, {
      duration: 1,
      ease: 'power2.inOut',
      stagger: 0.05, // Slight delay for cascading effect
    });
  };

  // gsap.set(mainContainerRef.current, {opacity: 0})

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
  }, [])
  

  return (
    <div ref={mainContainerRef} className="flex flex-col items-center">
      <div ref={containerRef} className="grid sm:grid-cols-3 grid-cols-2 gap-4 mb-8">
        {['bg-red-400', 'bg-blue-400', 'bg-green-400', 'bg-yellow-400', 'bg-purple-400', 'bg-pink-400'].map((color, index) => (
          <div
            key={index}
            className={`${color} w-28 h-28 rounded-lg shadow-md`}
          />
        ))}
      </div>
      <button
        onClick={handleShuffle}
        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition-all duration-200"
      >
        Shuffle Cards
      </button>
    </div>
  );
};

export default RandomCardShuffle;

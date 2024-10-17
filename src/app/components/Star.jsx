import React from 'react'
import { useRef, useEffect, useState } from "react";
import '../globals.css';
import { gsap } from "gsap";

const Star = ({height}) => {

  const starColors = ['bg-yellow-300', 'bg-green-300', 'bg-orange-300'];
  const [starColor, setStarColor] = useState('');
  const [style, setStyle] = useState({})

  const starRef = useRef(null);
    
  useEffect(()=>{
    const randomColor = starColors[Math.floor(Math.random()*starColors.length)];
    setStarColor(randomColor);

    const getRandomNumber = (min, max) => {
      return Math.random() * (max - min) + min;
    };
  
    const randomTop = Math.floor(Math.random()*(3000-32));
    const randomLeft = getRandomNumber(0.8,99.2);

    setStyle({
      top: `${randomTop}px`,
      left: `${randomLeft}%`
    })


    if (starRef.current) {

      gsap.set(starRef.current, {
        y: randomTop
      });

      gsap.to(starRef.current, {
        y: -5,
        duration: 5,
        repeat: -1,
      })
    }

    
  }, [])

  return (
    <div ref={starRef} className={`clip-star w-4 h-4 ${starColor} absolute`} 
    style={style}
    >
      
    </div>
  )
}

export default Star
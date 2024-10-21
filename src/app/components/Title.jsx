import React from 'react'
import {Kablammo} from '@next/font/google'

const kablammo = Kablammo({
  subsets: ['latin'],
  wieght: 400,
});

const Title = () => {

  return (
    <div className={`title text-7xl text-white font-bold flex flex-col items-center ${kablammo.className}`}>
      <p>INTERESTING</p>
      <p>EFFECTS
      {/* <svg className="inline" width="2.5rem" height="2.25rem" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.25rem" y="0" width="1" height="2.25rem" fill="black"/>
      <rect x="0" y="0" width="2.5rem" height="1" fill="black"/>
      </svg> */}
      </p>
    </div>
  )
}

export default Title
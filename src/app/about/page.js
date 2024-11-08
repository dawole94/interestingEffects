"use client"

import React from 'react'
import Background from '../components/Background'
import FeatherFall from '../components/FeatherFall'
import FlamingText from '../components/FlamingText'

const About = () => {
  return (
    <>
      <div className='flex justify-between bg-black'>
        <FeatherFall/>
        <div className='flex justify-center items-center w-[50%]'>
          <FlamingText/>
        </div>
      </div>
    </>
    
  )
}

export default About
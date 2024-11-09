"use client"

import React from 'react'
import Background from '../components/Background'
import FeatherFall from '../components/FeatherFall'
import FlamingText from '../components/FlamingText'

const About = () => {
  return (
    <>
      <div className='sm:flex sm:justify-between bg-black'>
        <FeatherFall/>
        <div className='flex justify-center items-center sm:w-[50%] w-[100%] h-screen'>
          <FlamingText/>
        </div>
      </div>
    </>
    
  )
}

export default About
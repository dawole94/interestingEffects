"use client"

import React from 'react'
import Background from './components/Background'
import BirdContainer from './components/BirdContainer'
import Title from './components/Title'
import Navbar from './components/Navbar'


const Homepage = () => {
  return (
    <>
      <Background/>
      <Navbar/>
      <Title/>
      <BirdContainer/>
    </>
  )
}

export default Homepage
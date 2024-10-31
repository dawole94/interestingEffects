"use client"

import React from 'react'
import Background from './components/Background'
import NormalComponent from './components/NormalComponent'
import SmallComponent from './components/SmallComponent'
import Landscapes from './components/Landscapes'

const Homepage = () => {
  return (
    <>
      <Background/>
      <SmallComponent/>
      <NormalComponent/>
      <Landscapes/>
      
      {/* <BirdContainer/>
      <SphereScene/> */}
    </>
  )
}

export default Homepage
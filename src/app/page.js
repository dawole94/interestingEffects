"use client"

import React from 'react'
import Background from './components/Background'
import NormalComponent from './components/NormalComponent'
import SmallComponent from './components/SmallComponent'
import Landscapes from './components/Landscapes'
import LandscapesSmall from './components/LandscapesSmall'

const Homepage = () => {
  return (
    <>
      <Background/>
      <SmallComponent/>
      <NormalComponent/>
      {window.innerWidth > 640 ? <Landscapes/> : <LandscapesSmall/>}
      
      {/* <BirdContainer/>
      <SphereScene/> */}
    </>
  )
}

export default Homepage
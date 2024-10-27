"use client"

import React from 'react'
import Background from './components/Background'
import NormalComponent from './components/NormalComponent'
import SmallComponent from './components/SmallComponent'

const Homepage = () => {
  return (
    <>
      <Background/>
      <SmallComponent/>
      <NormalComponent/>
      <p>abc</p>
      {/* <BirdContainer/>
      <SphereScene/> */}
    </>
  )
}

export default Homepage
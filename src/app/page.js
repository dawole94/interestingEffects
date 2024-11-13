"use client"

import React from 'react'
import Background from './components/Background'
import NormalComponent from './components/NormalComponent'
import SmallComponent from './components/SmallComponent'
import Landscapes from './components/Landscapes'
import LandscapesSmall from './components/LandscapesSmall'
import RotatingMotionPathOnScroll from './components/RotatingMotionPathOnScroll'
import ShatteringTextOnScroll from './components/ShatteringTextOnScroll'
import AnotherText from './components/AnotherText'
import EmptyComponent from './components/EmptyComponent'
import CardSwap from './components/CardSwap'
import Explosion from './components/Explosion'
import SpringMotion from './components/SpringMotion'
import Footer from './components/Footer'
// import ExplodingCircles from './components/ExplodingCircles'

const Homepage = () => {
  return (
    <>
      <Background/>
      <SmallComponent/>
      <NormalComponent/>
      {window.innerWidth > 640 ? <Landscapes/> : <LandscapesSmall/>}
      <ShatteringTextOnScroll/>
      <RotatingMotionPathOnScroll/>
      <AnotherText/>
      <CardSwap/>
      <Explosion/>
      <SpringMotion/>
      <Footer/>
      <EmptyComponent/>
      
      {/* <BirdContainer/>
      <SphereScene/> */}
    </>
  )
}

export default Homepage
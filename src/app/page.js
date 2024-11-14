"use client"

import React from 'react'
import { useState, useEffect } from "react";
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
import { useMediaQuery } from "react-responsive";

const Homepage = () => {

  const [isClient, setIsClient] = useState(false);

  // Ustawienie stanu, aby render działał tylko po stronie klienta
  useEffect(() => {
    setIsClient(true);
  }, []);

  const isBigScreen = useMediaQuery({ minWidth: 641 });

  if (!isClient) {
    return null; // Nie renderuj, dopóki klient nie jest gotowy
  } 

  return (
    <>
      <Background/>
      <SmallComponent/>
      <NormalComponent/>
      {isBigScreen ? <Landscapes/> : <LandscapesSmall/>}
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